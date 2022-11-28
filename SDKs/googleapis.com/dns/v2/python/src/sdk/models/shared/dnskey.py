from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DNSKeyAlgorithmEnum(str, Enum):
    RSASHA1 = "RSASHA1"
    RSASHA256 = "RSASHA256"
    RSASHA512 = "RSASHA512"
    ECDSAP256_SHA256 = "ECDSAP256SHA256"
    ECDSAP384_SHA384 = "ECDSAP384SHA384"

class DNSKeyTypeEnum(str, Enum):
    KEY_SIGNING = "KEY_SIGNING"
    ZONE_SIGNING = "ZONE_SIGNING"


@dataclass_json
@dataclass
class DNSKey:
    r"""DNSKey
    A DNSSEC key pair.
    """
    
    algorithm: Optional[DNSKeyAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    digests: Optional[List[DNSKeyDigest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digests') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    key_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyLength') }})
    key_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyTag') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    type: Optional[DNSKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

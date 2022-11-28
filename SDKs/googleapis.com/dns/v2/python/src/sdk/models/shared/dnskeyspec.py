from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DNSKeySpecAlgorithmEnum(str, Enum):
    RSASHA1 = "RSASHA1"
    RSASHA256 = "RSASHA256"
    RSASHA512 = "RSASHA512"
    ECDSAP256_SHA256 = "ECDSAP256SHA256"
    ECDSAP384_SHA384 = "ECDSAP384SHA384"

class DNSKeySpecKeyTypeEnum(str, Enum):
    KEY_SIGNING = "KEY_SIGNING"
    ZONE_SIGNING = "ZONE_SIGNING"


@dataclass_json
@dataclass
class DNSKeySpec:
    r"""DNSKeySpec
    Parameters for DnsKey key generation. Used for generating initial keys for a new ManagedZone and as default when adding a new DnsKey.
    """
    
    algorithm: Optional[DNSKeySpecAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    key_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyLength') }})
    key_type: Optional[DNSKeySpecKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyType') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    

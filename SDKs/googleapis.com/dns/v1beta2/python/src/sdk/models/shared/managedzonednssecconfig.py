from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ManagedZoneDNSSecConfigNonExistenceEnum(str, Enum):
    NSEC = "nsec"
    NSEC3 = "nsec3"

class ManagedZoneDNSSecConfigStateEnum(str, Enum):
    OFF = "off"
    ON = "on"
    TRANSFER = "transfer"


@dataclass_json
@dataclass
class ManagedZoneDNSSecConfig:
    default_key_specs: Optional[List[DNSKeySpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultKeySpecs') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    non_existence: Optional[ManagedZoneDNSSecConfigNonExistenceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonExistence') }})
    state: Optional[ManagedZoneDNSSecConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

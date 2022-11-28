from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PackageOccurrenceArchitectureEnum(str, Enum):
    ARCHITECTURE_UNSPECIFIED = "ARCHITECTURE_UNSPECIFIED"
    X86 = "X86"
    X64 = "X64"


@dataclass_json
@dataclass
class PackageOccurrence:
    r"""PackageOccurrence
    Details on how a particular software package was installed on a system.
    """
    
    architecture: Optional[PackageOccurrenceArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpeUri') }})
    license: Optional[License] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    location: Optional[List[Location]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

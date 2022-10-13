from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import license
from . import location
from . import version

class InstallationArchitectureEnum(str, Enum):
    ARCHITECTURE_UNSPECIFIED = "ARCHITECTURE_UNSPECIFIED"
    X86 = "X86"
    X64 = "X64"


@dataclass_json
@dataclass
class Installation:
    architecture: Optional[InstallationArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpeUri' }})
    license: Optional[license.License] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    location: Optional[List[location.Location]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

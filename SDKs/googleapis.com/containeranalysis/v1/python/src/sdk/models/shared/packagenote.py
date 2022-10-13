from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import digest
from . import distribution
from . import license
from . import version

class PackageNoteArchitectureEnum(str, Enum):
    ARCHITECTURE_UNSPECIFIED = "ARCHITECTURE_UNSPECIFIED"
    X86 = "X86"
    X64 = "X64"


@dataclass_json
@dataclass
class PackageNote:
    architecture: Optional[PackageNoteArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpeUri' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    digest: Optional[List[digest.Digest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    distribution: Optional[List[distribution.Distribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    license: Optional[license.License] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    maintainer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintainer' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

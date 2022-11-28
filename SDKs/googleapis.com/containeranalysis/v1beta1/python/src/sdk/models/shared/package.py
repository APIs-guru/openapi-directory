from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PackageArchitectureEnum(str, Enum):
    ARCHITECTURE_UNSPECIFIED = "ARCHITECTURE_UNSPECIFIED"
    X86 = "X86"
    X64 = "X64"


@dataclass_json
@dataclass
class Package:
    r"""Package
    Package represents a particular package version.
    """
    
    architecture: Optional[PackageArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpeUri') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    digest: Optional[List[Digest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    distribution: Optional[List[Distribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    license: Optional[License] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    maintainer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintainer') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

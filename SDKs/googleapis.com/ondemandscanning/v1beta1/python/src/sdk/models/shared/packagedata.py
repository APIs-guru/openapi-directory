from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PackageDataPackageTypeEnum(str, Enum):
    PACKAGE_TYPE_UNSPECIFIED = "PACKAGE_TYPE_UNSPECIFIED"
    OS = "OS"
    MAVEN = "MAVEN"
    GO = "GO"
    GO_STDLIB = "GO_STDLIB"


@dataclass_json
@dataclass
class PackageData:
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpeUri') }})
    dependency_chain: Optional[List[LanguagePackageDependency]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencyChain') }})
    file_location: Optional[List[FileLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileLocation') }})
    hash_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashDigest') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osVersion') }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    package_type: Optional[PackageDataPackageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    patched_cve: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchedCve') }})
    unused: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unused') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

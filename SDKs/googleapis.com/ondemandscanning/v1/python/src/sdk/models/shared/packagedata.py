from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import languagepackagedependency
from . import filelocation

class PackageDataPackageTypeEnum(str, Enum):
    PACKAGE_TYPE_UNSPECIFIED = "PACKAGE_TYPE_UNSPECIFIED"
    OS = "OS"
    MAVEN = "MAVEN"
    GO = "GO"
    GO_STDLIB = "GO_STDLIB"


@dataclass_json
@dataclass
class PackageData:
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpeUri' }})
    dependency_chain: Optional[List[languagepackagedependency.LanguagePackageDependency]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependencyChain' }})
    file_location: Optional[List[filelocation.FileLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileLocation' }})
    hash_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashDigest' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osVersion' }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    package_type: Optional[PackageDataPackageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    patched_cve: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patchedCve' }})
    unused: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unused' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

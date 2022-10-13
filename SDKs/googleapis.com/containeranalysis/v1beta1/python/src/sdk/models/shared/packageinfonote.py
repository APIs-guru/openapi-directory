from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import externalref
from . import license


@dataclass_json
@dataclass
class PackageInfoNote:
    analyzed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzed' }})
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribution' }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksum' }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    detailed_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailedDescription' }})
    download_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadLocation' }})
    external_refs: Optional[List[externalref.ExternalRef]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalRefs' }})
    files_license_info: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesLicenseInfo' }})
    home_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homePage' }})
    license_declared: Optional[license.License] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseDeclared' }})
    originator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originator' }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageType' }})
    summary_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaryDescription' }})
    supplier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplier' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationCode' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

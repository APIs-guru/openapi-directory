from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PackageInfoNote:
    r"""PackageInfoNote
    PackageInfoNote represents an SPDX Package Information section: https://spdx.github.io/spdx-spec/3-package-information/
    """
    
    analyzed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzed') }})
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    detailed_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailedDescription') }})
    download_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadLocation') }})
    external_refs: Optional[List[ExternalRef]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalRefs') }})
    files_license_info: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesLicenseInfo') }})
    home_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homePage') }})
    license_declared: Optional[License] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseDeclared') }})
    originator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originator') }})
    package_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    summary_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaryDescription') }})
    supplier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplier') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationCode') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

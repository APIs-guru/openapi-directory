from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1AndroidKeySettings:
    allow_all_package_names: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowAllPackageNames' }})
    allowed_package_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedPackageNames' }})
    

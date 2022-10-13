from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1IosKeySettings:
    allow_all_bundle_ids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowAllBundleIds' }})
    allowed_bundle_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedBundleIds' }})
    

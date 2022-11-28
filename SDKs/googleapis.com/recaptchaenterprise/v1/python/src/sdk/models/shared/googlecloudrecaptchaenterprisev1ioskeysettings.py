from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1IosKeySettings:
    r"""GoogleCloudRecaptchaenterpriseV1IosKeySettings
    Settings specific to keys that can be used by iOS apps.
    """
    
    allow_all_bundle_ids: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAllBundleIds') }})
    allowed_bundle_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedBundleIds') }})
    

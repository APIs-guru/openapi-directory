from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1AndroidKeySettings:
    r"""GoogleCloudRecaptchaenterpriseV1AndroidKeySettings
    Settings specific to keys that can be used by Android apps.
    """
    
    allow_all_package_names: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowAllPackageNames') }})
    allowed_package_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedPackageNames') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppCategoryTargetingOptionDetails:
    r"""AppCategoryTargetingOptionDetails
    Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    

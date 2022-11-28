from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppTargeting:
    r"""AppTargeting
    A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.
    """
    
    mobile_app_category_targeting: Optional[NumericTargetingDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileAppCategoryTargeting') }})
    mobile_app_targeting: Optional[StringTargetingDimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileAppTargeting') }})
    

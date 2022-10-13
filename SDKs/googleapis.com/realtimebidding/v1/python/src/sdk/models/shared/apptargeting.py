from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import numerictargetingdimension
from . import stringtargetingdimension


@dataclass_json
@dataclass
class AppTargeting:
    mobile_app_category_targeting: Optional[numerictargetingdimension.NumericTargetingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileAppCategoryTargeting' }})
    mobile_app_targeting: Optional[stringtargetingdimension.StringTargetingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileAppTargeting' }})
    

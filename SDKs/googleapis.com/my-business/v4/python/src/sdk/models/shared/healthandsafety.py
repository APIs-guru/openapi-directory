from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HealthAndSafety:
    r"""HealthAndSafety
    Health and safety measures implemented by the hotel during COVID-19.
    """
    
    enhanced_cleaning: Optional[EnhancedCleaning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enhancedCleaning') }})
    increased_food_safety: Optional[IncreasedFoodSafety] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('increasedFoodSafety') }})
    minimized_contact: Optional[MinimizedContact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimizedContact') }})
    personal_protection: Optional[PersonalProtection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalProtection') }})
    physical_distancing: Optional[PhysicalDistancing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalDistancing') }})
    

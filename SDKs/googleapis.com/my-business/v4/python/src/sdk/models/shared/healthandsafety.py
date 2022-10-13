from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import enhancedcleaning
from . import increasedfoodsafety
from . import minimizedcontact
from . import personalprotection
from . import physicaldistancing


@dataclass_json
@dataclass
class HealthAndSafety:
    enhanced_cleaning: Optional[enhancedcleaning.EnhancedCleaning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enhancedCleaning' }})
    increased_food_safety: Optional[increasedfoodsafety.IncreasedFoodSafety] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'increasedFoodSafety' }})
    minimized_contact: Optional[minimizedcontact.MinimizedContact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimizedContact' }})
    personal_protection: Optional[personalprotection.PersonalProtection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personalProtection' }})
    physical_distancing: Optional[physicaldistancing.PhysicalDistancing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalDistancing' }})
    

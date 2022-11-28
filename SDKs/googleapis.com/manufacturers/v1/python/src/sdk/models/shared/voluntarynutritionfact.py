from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VoluntaryNutritionFact:
    r"""VoluntaryNutritionFact
    Voluntary Nutrition Facts.
    """
    
    daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyPercentage') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    value: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

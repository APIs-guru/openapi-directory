from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import floatunit


@dataclass_json
@dataclass
class VoluntaryNutritionFact:
    daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyPercentage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

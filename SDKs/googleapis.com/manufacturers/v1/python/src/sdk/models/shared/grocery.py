from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Grocery:
    active_ingredients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeIngredients' }})
    alcohol_by_volume: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alcoholByVolume' }})
    allergens: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allergens' }})
    derived_nutrition_claim: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'derivedNutritionClaim' }})
    directions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directions' }})
    indications: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indications' }})
    ingredients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingredients' }})
    nutrition_claim: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nutritionClaim' }})
    storage_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageInstructions' }})
    

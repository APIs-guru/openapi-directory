from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import floatunit
from . import voluntarynutritionfact


@dataclass_json
@dataclass
class Nutrition:
    added_sugars: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedSugars' }})
    added_sugars_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedSugarsDailyPercentage' }})
    calcium: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calcium' }})
    calcium_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calciumDailyPercentage' }})
    cholesterol: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cholesterol' }})
    cholesterol_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cholesterolDailyPercentage' }})
    dietary_fiber: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dietaryFiber' }})
    dietary_fiber_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dietaryFiberDailyPercentage' }})
    energy: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energy' }})
    energy_from_fat: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyFromFat' }})
    folate_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folateDailyPercentage' }})
    folate_folic_acid: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folateFolicAcid' }})
    folate_mcg_dfe: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folateMcgDfe' }})
    iron: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iron' }})
    iron_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ironDailyPercentage' }})
    monounsaturated_fat: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monounsaturatedFat' }})
    nutrition_fact_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nutritionFactMeasure' }})
    polyols: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polyols' }})
    polyunsaturated_fat: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polyunsaturatedFat' }})
    potassium: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'potassium' }})
    potassium_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'potassiumDailyPercentage' }})
    prepared_size_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preparedSizeDescription' }})
    protein: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protein' }})
    protein_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proteinDailyPercentage' }})
    saturated_fat: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saturatedFat' }})
    saturated_fat_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saturatedFatDailyPercentage' }})
    serving_size_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingSizeDescription' }})
    serving_size_measure: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingSizeMeasure' }})
    servings_per_container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servingsPerContainer' }})
    sodium: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sodium' }})
    sodium_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sodiumDailyPercentage' }})
    starch: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starch' }})
    total_carbohydrate: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCarbohydrate' }})
    total_carbohydrate_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCarbohydrateDailyPercentage' }})
    total_fat: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFat' }})
    total_fat_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFatDailyPercentage' }})
    total_sugars: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSugars' }})
    total_sugars_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSugarsDailyPercentage' }})
    trans_fat: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transFat' }})
    trans_fat_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transFatDailyPercentage' }})
    vitamin_d: Optional[floatunit.FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vitaminD' }})
    vitamin_d_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vitaminDDailyPercentage' }})
    voluntary_nutrition_fact: Optional[List[voluntarynutritionfact.VoluntaryNutritionFact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voluntaryNutritionFact' }})
    

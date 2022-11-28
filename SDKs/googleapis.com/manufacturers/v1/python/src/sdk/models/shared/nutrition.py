from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Nutrition:
    added_sugars: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedSugars') }})
    added_sugars_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedSugarsDailyPercentage') }})
    calcium: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calcium') }})
    calcium_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calciumDailyPercentage') }})
    cholesterol: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cholesterol') }})
    cholesterol_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cholesterolDailyPercentage') }})
    dietary_fiber: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dietaryFiber') }})
    dietary_fiber_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dietaryFiberDailyPercentage') }})
    energy: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energy') }})
    energy_from_fat: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyFromFat') }})
    folate_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folateDailyPercentage') }})
    folate_folic_acid: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folateFolicAcid') }})
    folate_mcg_dfe: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folateMcgDfe') }})
    iron: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iron') }})
    iron_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ironDailyPercentage') }})
    monounsaturated_fat: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monounsaturatedFat') }})
    nutrition_fact_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nutritionFactMeasure') }})
    polyols: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polyols') }})
    polyunsaturated_fat: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polyunsaturatedFat') }})
    potassium: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('potassium') }})
    potassium_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('potassiumDailyPercentage') }})
    prepared_size_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preparedSizeDescription') }})
    protein: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protein') }})
    protein_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proteinDailyPercentage') }})
    saturated_fat: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturatedFat') }})
    saturated_fat_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturatedFatDailyPercentage') }})
    serving_size_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingSizeDescription') }})
    serving_size_measure: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingSizeMeasure') }})
    servings_per_container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servingsPerContainer') }})
    sodium: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sodium') }})
    sodium_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sodiumDailyPercentage') }})
    starch: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starch') }})
    total_carbohydrate: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCarbohydrate') }})
    total_carbohydrate_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCarbohydrateDailyPercentage') }})
    total_fat: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFat') }})
    total_fat_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFatDailyPercentage') }})
    total_sugars: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSugars') }})
    total_sugars_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSugarsDailyPercentage') }})
    trans_fat: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transFat') }})
    trans_fat_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transFatDailyPercentage') }})
    vitamin_d: Optional[FloatUnit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vitaminD') }})
    vitamin_d_daily_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vitaminDDailyPercentage') }})
    voluntary_nutrition_fact: Optional[List[VoluntaryNutritionFact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voluntaryNutritionFact') }})
    

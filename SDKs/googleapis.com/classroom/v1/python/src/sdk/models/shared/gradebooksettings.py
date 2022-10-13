from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import gradecategory

class GradebookSettingsCalculationTypeEnum(str, Enum):
    CALCULATION_TYPE_UNSPECIFIED = "CALCULATION_TYPE_UNSPECIFIED"
    TOTAL_POINTS = "TOTAL_POINTS"
    WEIGHTED_CATEGORIES = "WEIGHTED_CATEGORIES"

class GradebookSettingsDisplaySettingEnum(str, Enum):
    DISPLAY_SETTING_UNSPECIFIED = "DISPLAY_SETTING_UNSPECIFIED"
    SHOW_OVERALL_GRADE = "SHOW_OVERALL_GRADE"
    HIDE_OVERALL_GRADE = "HIDE_OVERALL_GRADE"
    SHOW_TEACHERS_ONLY = "SHOW_TEACHERS_ONLY"


@dataclass_json
@dataclass
class GradebookSettings:
    calculation_type: Optional[GradebookSettingsCalculationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calculationType' }})
    display_setting: Optional[GradebookSettingsDisplaySettingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displaySetting' }})
    grade_categories: Optional[List[gradecategory.GradeCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradeCategories' }})
    

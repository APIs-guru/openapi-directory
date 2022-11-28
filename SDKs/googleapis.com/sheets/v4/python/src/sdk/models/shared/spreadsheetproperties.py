from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SpreadsheetPropertiesAutoRecalcEnum(str, Enum):
    RECALCULATION_INTERVAL_UNSPECIFIED = "RECALCULATION_INTERVAL_UNSPECIFIED"
    ON_CHANGE = "ON_CHANGE"
    MINUTE = "MINUTE"
    HOUR = "HOUR"


@dataclass_json
@dataclass
class SpreadsheetProperties:
    r"""SpreadsheetProperties
    Properties of a spreadsheet.
    """
    
    auto_recalc: Optional[SpreadsheetPropertiesAutoRecalcEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRecalc') }})
    default_format: Optional[CellFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultFormat') }})
    iterative_calculation_settings: Optional[IterativeCalculationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iterativeCalculationSettings') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    spreadsheet_theme: Optional[SpreadsheetTheme] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetTheme') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

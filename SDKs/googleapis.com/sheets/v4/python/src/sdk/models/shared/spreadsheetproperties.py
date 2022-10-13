from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cellformat
from . import iterativecalculationsettings
from . import spreadsheettheme

class SpreadsheetPropertiesAutoRecalcEnum(str, Enum):
    RECALCULATION_INTERVAL_UNSPECIFIED = "RECALCULATION_INTERVAL_UNSPECIFIED"
    ON_CHANGE = "ON_CHANGE"
    MINUTE = "MINUTE"
    HOUR = "HOUR"


@dataclass_json
@dataclass
class SpreadsheetProperties:
    auto_recalc: Optional[SpreadsheetPropertiesAutoRecalcEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRecalc' }})
    default_format: Optional[cellformat.CellFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultFormat' }})
    iterative_calculation_settings: Optional[iterativecalculationsettings.IterativeCalculationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iterativeCalculationSettings' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    spreadsheet_theme: Optional[spreadsheettheme.SpreadsheetTheme] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spreadsheetTheme' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

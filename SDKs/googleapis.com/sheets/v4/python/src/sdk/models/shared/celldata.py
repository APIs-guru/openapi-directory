from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CellData:
    r"""CellData
    Data about a specific cell.
    """
    
    data_source_formula: Optional[DataSourceFormula] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceFormula') }})
    data_source_table: Optional[DataSourceTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceTable') }})
    data_validation: Optional[DataValidationRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataValidation') }})
    effective_format: Optional[CellFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveFormat') }})
    effective_value: Optional[ExtendedValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveValue') }})
    formatted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedValue') }})
    hyperlink: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperlink') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    pivot_table: Optional[PivotTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotTable') }})
    text_format_runs: Optional[List[TextFormatRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormatRuns') }})
    user_entered_format: Optional[CellFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEnteredFormat') }})
    user_entered_value: Optional[ExtendedValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEnteredValue') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourceformula
from . import datasourcetable
from . import datavalidationrule
from . import cellformat
from . import extendedvalue
from . import pivottable
from . import textformatrun
from . import cellformat
from . import extendedvalue


@dataclass_json
@dataclass
class CellData:
    data_source_formula: Optional[datasourceformula.DataSourceFormula] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceFormula' }})
    data_source_table: Optional[datasourcetable.DataSourceTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceTable' }})
    data_validation: Optional[datavalidationrule.DataValidationRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataValidation' }})
    effective_format: Optional[cellformat.CellFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveFormat' }})
    effective_value: Optional[extendedvalue.ExtendedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveValue' }})
    formatted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedValue' }})
    hyperlink: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperlink' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    pivot_table: Optional[pivottable.PivotTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivotTable' }})
    text_format_runs: Optional[List[textformatrun.TextFormatRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textFormatRuns' }})
    user_entered_format: Optional[cellformat.CellFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEnteredFormat' }})
    user_entered_value: Optional[extendedvalue.ExtendedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEnteredValue' }})
    

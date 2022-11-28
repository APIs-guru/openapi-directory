from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataSourceSheetDimensionRange:
    r"""DataSourceSheetDimensionRange
    A range along a single dimension on a DATA_SOURCE sheet.
    """
    
    column_references: Optional[List[DataSourceColumnReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnReferences') }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    

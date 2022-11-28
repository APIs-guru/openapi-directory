from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DataSourceTableColumnSelectionTypeEnum(str, Enum):
    DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED"
    SELECTED = "SELECTED"
    SYNC_ALL = "SYNC_ALL"


@dataclass_json
@dataclass
class DataSourceTable:
    r"""DataSourceTable
    A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as \"Extract\" in the Sheets editor.
    """
    
    column_selection_type: Optional[DataSourceTableColumnSelectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSelectionType') }})
    columns: Optional[List[DataSourceColumnReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    data_execution_status: Optional[DataExecutionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    filter_specs: Optional[List[FilterSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSpecs') }})
    row_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowLimit') }})
    sort_specs: Optional[List[SortSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortSpecs') }})
    

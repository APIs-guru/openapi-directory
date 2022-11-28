from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DropRowRangeRequest:
    r"""DropRowRangeRequest
    Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange
    """
    
    delete_all_data_from_table: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteAllDataFromTable') }})
    row_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowKeyPrefix') }})
    

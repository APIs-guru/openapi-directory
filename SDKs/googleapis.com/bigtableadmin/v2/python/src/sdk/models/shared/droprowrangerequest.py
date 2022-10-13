from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DropRowRangeRequest:
    delete_all_data_from_table: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteAllDataFromTable' }})
    row_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowKeyPrefix' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import column


@dataclass_json
@dataclass
class ColumnLayout:
    columns: Optional[List[column.Column]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MysqlColumn:
    collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collation' }})
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnName' }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    nullable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nullable' }})
    ordinal_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinalPosition' }})
    primary_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryKey' }})
    

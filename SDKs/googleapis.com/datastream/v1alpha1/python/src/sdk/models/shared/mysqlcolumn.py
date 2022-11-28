from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MysqlColumn:
    r"""MysqlColumn
    MySQL Column.
    """
    
    collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collation') }})
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnName') }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    nullable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullable') }})
    ordinal_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ordinalPosition') }})
    primary_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryKey') }})
    

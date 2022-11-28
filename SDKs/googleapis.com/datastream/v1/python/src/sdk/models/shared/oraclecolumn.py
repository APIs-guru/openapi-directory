from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OracleColumn:
    r"""OracleColumn
    Oracle Column.
    """
    
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    nullable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullable') }})
    ordinal_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ordinalPosition') }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    primary_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryKey') }})
    scale: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    

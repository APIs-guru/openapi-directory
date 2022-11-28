from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TableFieldSchema:
    r"""TableFieldSchema
    A field in TableSchema.
    """
    
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    fields: Optional[List[TableFieldSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

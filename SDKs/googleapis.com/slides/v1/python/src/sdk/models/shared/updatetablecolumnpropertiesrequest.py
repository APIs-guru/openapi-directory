from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateTableColumnPropertiesRequest:
    r"""UpdateTableColumnPropertiesRequest
    Updates the properties of a Table column.
    """
    
    column_indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnIndices') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    table_column_properties: Optional[TableColumnProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableColumnProperties') }})
    

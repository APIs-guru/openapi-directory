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
class UpdateTableRowPropertiesRequest:
    r"""UpdateTableRowPropertiesRequest
    Updates the properties of a Table row.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    row_indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIndices') }})
    table_row_properties: Optional[TableRowProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRowProperties') }})
    

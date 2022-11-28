from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UpdateTableBorderPropertiesRequestBorderPositionEnum(str, Enum):
    ALL = "ALL"
    BOTTOM = "BOTTOM"
    INNER = "INNER"
    INNER_HORIZONTAL = "INNER_HORIZONTAL"
    INNER_VERTICAL = "INNER_VERTICAL"
    LEFT = "LEFT"
    OUTER = "OUTER"
    RIGHT = "RIGHT"
    TOP = "TOP"


@dataclass_json
@dataclass
class UpdateTableBorderPropertiesRequest:
    r"""UpdateTableBorderPropertiesRequest
    Updates the properties of the table borders in a Table.
    """
    
    border_position: Optional[UpdateTableBorderPropertiesRequestBorderPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderPosition') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    table_border_properties: Optional[TableBorderProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableBorderProperties') }})
    table_range: Optional[TableRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRange') }})
    

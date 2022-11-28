from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RequestInput:
    r"""RequestInput
    The kinds of update requests that can be made.
    """
    
    create_item: Optional[CreateItemRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createItem') }})
    delete_item: Optional[DeleteItemRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteItem') }})
    move_item: Optional[MoveItemRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moveItem') }})
    update_form_info: Optional[UpdateFormInfoRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateFormInfo') }})
    update_item: Optional[UpdateItemRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateItem') }})
    update_settings: Optional[UpdateSettingsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateSettings') }})
    

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
class FieldValue:
    r"""FieldValue
    Contains a value of a Field.
    """
    
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    integer: Optional[Integer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integer') }})
    selection: Optional[Selection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selection') }})
    selection_list: Optional[SelectionList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionList') }})
    text: Optional[Text] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    text_list: Optional[TextList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textList') }})
    user: Optional[SingleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    user_list: Optional[UserList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userList') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import date
from . import integer
from . import selection
from . import selectionlist
from . import text
from . import textlist
from . import singleuser
from . import userlist


@dataclass_json
@dataclass
class FieldValue:
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    integer: Optional[integer.Integer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integer' }})
    selection: Optional[selection.Selection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selection' }})
    selection_list: Optional[selectionlist.SelectionList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionList' }})
    text: Optional[text.Text] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    text_list: Optional[textlist.TextList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textList' }})
    user: Optional[singleuser.SingleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    user_list: Optional[userlist.UserList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userList' }})
    

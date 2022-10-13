from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createitemrequest
from . import deleteitemrequest
from . import moveitemrequest
from . import updateforminforequest
from . import updateitemrequest
from . import updatesettingsrequest


@dataclass_json
@dataclass
class Request:
    create_item: Optional[createitemrequest.CreateItemRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createItem' }})
    delete_item: Optional[deleteitemrequest.DeleteItemRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteItem' }})
    move_item: Optional[moveitemrequest.MoveItemRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moveItem' }})
    update_form_info: Optional[updateforminforequest.UpdateFormInfoRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateFormInfo' }})
    update_item: Optional[updateitemrequest.UpdateItemRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateItem' }})
    update_settings: Optional[updatesettingsrequest.UpdateSettingsRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateSettings' }})
    

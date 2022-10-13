from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import info
from . import item
from . import formsettings


@dataclass_json
@dataclass
class Form:
    form_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formId' }})
    info: Optional[info.Info] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    items: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    linked_sheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedSheetId' }})
    responder_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responderUri' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    settings: Optional[formsettings.FormSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

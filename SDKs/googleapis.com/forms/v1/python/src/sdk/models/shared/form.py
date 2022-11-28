from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Form:
    r"""Form
    A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
    """
    
    form_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formId') }})
    info: Optional[Info] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    items: Optional[List[Item]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    linked_sheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedSheetId') }})
    responder_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responderUri') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    settings: Optional[FormSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclass
class FormInput:
    r"""FormInput
    A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
    """
    
    info: Optional[InfoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    items: Optional[List[ItemInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    settings: Optional[FormSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

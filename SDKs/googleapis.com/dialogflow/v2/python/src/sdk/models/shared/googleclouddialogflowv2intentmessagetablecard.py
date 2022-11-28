from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageTableCard:
    r"""GoogleCloudDialogflowV2IntentMessageTableCard
    Table card for Actions on Google.
    """
    
    buttons: Optional[List[GoogleCloudDialogflowV2IntentMessageBasicCardButton]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    column_properties: Optional[List[GoogleCloudDialogflowV2IntentMessageColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnProperties') }})
    image: Optional[GoogleCloudDialogflowV2IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    rows: Optional[List[GoogleCloudDialogflowV2IntentMessageTableCardRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

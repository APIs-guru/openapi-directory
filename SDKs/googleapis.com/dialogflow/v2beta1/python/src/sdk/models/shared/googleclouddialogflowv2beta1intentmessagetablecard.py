from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageTableCard:
    r"""GoogleCloudDialogflowV2beta1IntentMessageTableCard
    Table card for Actions on Google.
    """
    
    buttons: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buttons') }})
    column_properties: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnProperties') }})
    image: Optional[GoogleCloudDialogflowV2beta1IntentMessageImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    rows: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageTableCardRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    subtitle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtitle') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

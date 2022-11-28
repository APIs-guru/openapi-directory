from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3QueryInput:
    r"""GoogleCloudDialogflowCxV3QueryInput
    Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 
    """
    
    audio: Optional[GoogleCloudDialogflowCxV3AudioInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    dtmf: Optional[GoogleCloudDialogflowCxV3DtmfInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dtmf') }})
    event: Optional[GoogleCloudDialogflowCxV3EventInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    intent: Optional[GoogleCloudDialogflowCxV3IntentInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    text: Optional[GoogleCloudDialogflowCxV3TextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

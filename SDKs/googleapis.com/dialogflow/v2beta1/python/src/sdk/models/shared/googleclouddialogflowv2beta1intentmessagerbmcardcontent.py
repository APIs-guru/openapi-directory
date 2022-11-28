from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent:
    r"""GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent
    Rich Business Messaging (RBM) Card content
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    media: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    suggestions: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

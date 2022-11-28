from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum(str, Enum):
    RESPONSE_MEDIA_TYPE_UNSPECIFIED = "RESPONSE_MEDIA_TYPE_UNSPECIFIED"
    AUDIO = "AUDIO"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageMediaContent:
    r"""GoogleCloudDialogflowV2beta1IntentMessageMediaContent
    The media content card for Actions on Google.
    """
    
    media_objects: Optional[List[GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaObjects') }})
    media_type: Optional[GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    

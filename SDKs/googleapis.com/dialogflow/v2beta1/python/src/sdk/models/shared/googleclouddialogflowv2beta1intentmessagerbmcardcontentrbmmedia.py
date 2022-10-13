from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum(str, Enum):
    HEIGHT_UNSPECIFIED = "HEIGHT_UNSPECIFIED"
    SHORT = "SHORT"
    MEDIUM = "MEDIUM"
    TALL = "TALL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia:
    file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUri' }})
    height: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    thumbnail_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUri' }})
    

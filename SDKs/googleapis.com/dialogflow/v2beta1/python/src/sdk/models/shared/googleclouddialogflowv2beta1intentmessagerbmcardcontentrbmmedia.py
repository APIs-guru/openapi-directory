from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum(str, Enum):
    HEIGHT_UNSPECIFIED = "HEIGHT_UNSPECIFIED"
    SHORT = "SHORT"
    MEDIUM = "MEDIUM"
    TALL = "TALL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia:
    r"""GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia
    Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
    """
    
    file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUri') }})
    height: Optional[GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMediaHeightEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    thumbnail_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUri') }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessagemediacontentresponsemediaobject

class GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum(str, Enum):
    RESPONSE_MEDIA_TYPE_UNSPECIFIED = "RESPONSE_MEDIA_TYPE_UNSPECIFIED"
    AUDIO = "AUDIO"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageMediaContent:
    media_objects: Optional[List[googleclouddialogflowv2intentmessagemediacontentresponsemediaobject.GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaObjects' }})
    media_type: Optional[GoogleCloudDialogflowV2IntentMessageMediaContentMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    

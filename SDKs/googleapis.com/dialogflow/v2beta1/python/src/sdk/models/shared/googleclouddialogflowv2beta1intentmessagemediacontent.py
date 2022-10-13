from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessagemediacontentresponsemediaobject

class GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum(str, Enum):
    RESPONSE_MEDIA_TYPE_UNSPECIFIED = "RESPONSE_MEDIA_TYPE_UNSPECIFIED"
    AUDIO = "AUDIO"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageMediaContent:
    media_objects: Optional[List[googleclouddialogflowv2beta1intentmessagemediacontentresponsemediaobject.GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaObjects' }})
    media_type: Optional[GoogleCloudDialogflowV2beta1IntentMessageMediaContentMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    

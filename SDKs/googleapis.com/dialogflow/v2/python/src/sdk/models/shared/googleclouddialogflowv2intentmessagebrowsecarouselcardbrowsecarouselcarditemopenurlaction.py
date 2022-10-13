from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnum(str, Enum):
    URL_TYPE_HINT_UNSPECIFIED = "URL_TYPE_HINT_UNSPECIFIED"
    AMP_ACTION = "AMP_ACTION"
    AMP_CONTENT = "AMP_CONTENT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLAction:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    url_type_hint: Optional[GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenURLActionURLTypeHintEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlTypeHint' }})
    

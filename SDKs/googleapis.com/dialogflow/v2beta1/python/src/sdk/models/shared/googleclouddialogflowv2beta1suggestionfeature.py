from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    ARTICLE_SUGGESTION = "ARTICLE_SUGGESTION"
    FAQ = "FAQ"
    SMART_REPLY = "SMART_REPLY"
    CONVERSATION_SUMMARIZATION = "CONVERSATION_SUMMARIZATION"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SuggestionFeature:
    type: Optional[GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

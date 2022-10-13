from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2articlesuggestionmodelmetadata
from . import googleclouddialogflowv2inputdataset
from . import googleclouddialogflowv2smartreplymodelmetadata

class GoogleCloudDialogflowV2ConversationModelStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    UNDEPLOYED = "UNDEPLOYED"
    DEPLOYING = "DEPLOYING"
    DEPLOYED = "DEPLOYED"
    UNDEPLOYING = "UNDEPLOYING"
    DELETING = "DELETING"
    FAILED = "FAILED"
    PENDING = "PENDING"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ConversationModel:
    article_suggestion_model_metadata: Optional[googleclouddialogflowv2articlesuggestionmodelmetadata.GoogleCloudDialogflowV2ArticleSuggestionModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleSuggestionModelMetadata' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    datasets: Optional[List[googleclouddialogflowv2inputdataset.GoogleCloudDialogflowV2InputDataset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasets' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    smart_reply_model_metadata: Optional[googleclouddialogflowv2smartreplymodelmetadata.GoogleCloudDialogflowV2SmartReplyModelMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartReplyModelMetadata' }})
    state: Optional[GoogleCloudDialogflowV2ConversationModelStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

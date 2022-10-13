from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1conversationcallmetadata
from . import googlecloudcontactcenterinsightsv1conversationdatasource
from . import googlecloudcontactcenterinsightsv1dialogflowintent
from . import googlecloudcontactcenterinsightsv1analysis
from . import googlecloudcontactcenterinsightsv1runtimeannotation
from . import googlecloudcontactcenterinsightsv1conversationtranscript

class GoogleCloudContactcenterinsightsV1ConversationMediumEnum(str, Enum):
    MEDIUM_UNSPECIFIED = "MEDIUM_UNSPECIFIED"
    PHONE_CALL = "PHONE_CALL"
    CHAT = "CHAT"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1Conversation:
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentId' }})
    call_metadata: Optional[googlecloudcontactcenterinsightsv1conversationcallmetadata.GoogleCloudContactcenterinsightsV1ConversationCallMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callMetadata' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    data_source: Optional[googlecloudcontactcenterinsightsv1conversationdatasource.GoogleCloudContactcenterinsightsV1ConversationDataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    dialogflow_intents: Optional[dict[str, googlecloudcontactcenterinsightsv1dialogflowintent.GoogleCloudContactcenterinsightsV1DialogflowIntent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogflowIntents' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    latest_analysis: Optional[googlecloudcontactcenterinsightsv1analysis.GoogleCloudContactcenterinsightsV1Analysis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestAnalysis' }})
    medium: Optional[GoogleCloudContactcenterinsightsV1ConversationMediumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    obfuscated_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscatedUserId' }})
    runtime_annotations: Optional[List[googlecloudcontactcenterinsightsv1runtimeannotation.GoogleCloudContactcenterinsightsV1RuntimeAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeAnnotations' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    transcript: Optional[googlecloudcontactcenterinsightsv1conversationtranscript.GoogleCloudContactcenterinsightsV1ConversationTranscript] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcript' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    turn_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turnCount' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

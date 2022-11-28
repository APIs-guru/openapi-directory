from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudContactcenterinsightsV1ConversationMediumEnum(str, Enum):
    MEDIUM_UNSPECIFIED = "MEDIUM_UNSPECIFIED"
    PHONE_CALL = "PHONE_CALL"
    CHAT = "CHAT"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1Conversation:
    r"""GoogleCloudContactcenterinsightsV1Conversation
    The conversation resource.
    """
    
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    call_metadata: Optional[GoogleCloudContactcenterinsightsV1ConversationCallMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callMetadata') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_source: Optional[GoogleCloudContactcenterinsightsV1ConversationDataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    dialogflow_intents: Optional[dict[str, GoogleCloudContactcenterinsightsV1DialogflowIntent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowIntents') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latest_analysis: Optional[GoogleCloudContactcenterinsightsV1Analysis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAnalysis') }})
    medium: Optional[GoogleCloudContactcenterinsightsV1ConversationMediumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    obfuscated_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedUserId') }})
    runtime_annotations: Optional[List[GoogleCloudContactcenterinsightsV1RuntimeAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeAnnotations') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    transcript: Optional[GoogleCloudContactcenterinsightsV1ConversationTranscript] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcript') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    turn_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('turnCount') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationInput:
    r"""GoogleCloudContactcenterinsightsV1ConversationInput
    The conversation resource.
    """
    
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    call_metadata: Optional[GoogleCloudContactcenterinsightsV1ConversationCallMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callMetadata') }})
    data_source: Optional[GoogleCloudContactcenterinsightsV1ConversationDataSourceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latest_analysis: Optional[GoogleCloudContactcenterinsightsV1AnalysisInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestAnalysis') }})
    medium: Optional[GoogleCloudContactcenterinsightsV1ConversationMediumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    obfuscated_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedUserId') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    transcript: Optional[GoogleCloudContactcenterinsightsV1ConversationTranscript] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcript') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    

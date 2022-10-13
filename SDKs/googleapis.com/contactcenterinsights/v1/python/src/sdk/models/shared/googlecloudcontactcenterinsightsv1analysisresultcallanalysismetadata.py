from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1callannotation
from . import googlecloudcontactcenterinsightsv1entity
from . import googlecloudcontactcenterinsightsv1intent
from . import googlecloudcontactcenterinsightsv1issuemodelresult
from . import googlecloudcontactcenterinsightsv1phrasematchdata
from . import googlecloudcontactcenterinsightsv1conversationlevelsentiment


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata:
    annotations: Optional[List[googlecloudcontactcenterinsightsv1callannotation.GoogleCloudContactcenterinsightsV1CallAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    entities: Optional[dict[str, googlecloudcontactcenterinsightsv1entity.GoogleCloudContactcenterinsightsV1Entity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    intents: Optional[dict[str, googlecloudcontactcenterinsightsv1intent.GoogleCloudContactcenterinsightsV1Intent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    issue_model_result: Optional[googlecloudcontactcenterinsightsv1issuemodelresult.GoogleCloudContactcenterinsightsV1IssueModelResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueModelResult' }})
    phrase_matchers: Optional[dict[str, googlecloudcontactcenterinsightsv1phrasematchdata.GoogleCloudContactcenterinsightsV1PhraseMatchData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseMatchers' }})
    sentiments: Optional[List[googlecloudcontactcenterinsightsv1conversationlevelsentiment.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentiments' }})
    

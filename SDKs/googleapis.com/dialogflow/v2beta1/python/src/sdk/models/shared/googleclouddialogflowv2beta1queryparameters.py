from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1context
from . import googletypelatlng
from . import googleclouddialogflowv2beta1sentimentanalysisrequestconfig
from . import googleclouddialogflowv2beta1sessionentitytype
from . import googleclouddialogflowv2beta1subagent


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1QueryParameters:
    contexts: Optional[List[googleclouddialogflowv2beta1context.GoogleCloudDialogflowV2beta1Context]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    geo_location: Optional[googletypelatlng.GoogleTypeLatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoLocation' }})
    knowledge_base_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knowledgeBaseNames' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    reset_contexts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetContexts' }})
    sentiment_analysis_request_config: Optional[googleclouddialogflowv2beta1sentimentanalysisrequestconfig.GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysisRequestConfig' }})
    session_entity_types: Optional[List[googleclouddialogflowv2beta1sessionentitytype.GoogleCloudDialogflowV2beta1SessionEntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionEntityTypes' }})
    sub_agents: Optional[List[googleclouddialogflowv2beta1subagent.GoogleCloudDialogflowV2beta1SubAgent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subAgents' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    webhook_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookHeaders' }})
    

from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2context
from . import googletypelatlng
from . import googleclouddialogflowv2sentimentanalysisrequestconfig
from . import googleclouddialogflowv2sessionentitytype


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2QueryParameters:
    contexts: Optional[List[googleclouddialogflowv2context.GoogleCloudDialogflowV2Context]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    geo_location: Optional[googletypelatlng.GoogleTypeLatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoLocation' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    reset_contexts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetContexts' }})
    sentiment_analysis_request_config: Optional[googleclouddialogflowv2sentimentanalysisrequestconfig.GoogleCloudDialogflowV2SentimentAnalysisRequestConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysisRequestConfig' }})
    session_entity_types: Optional[List[googleclouddialogflowv2sessionentitytype.GoogleCloudDialogflowV2SessionEntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionEntityTypes' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    webhook_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookHeaders' }})
    

from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googletypelatlng
from . import googleclouddialogflowcxv3beta1sessionentitytype


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1QueryParameters:
    analyze_query_text_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzeQueryTextSentiment' }})
    current_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    disable_webhook: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableWebhook' }})
    flow_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowVersions' }})
    geo_location: Optional[googletypelatlng.GoogleTypeLatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoLocation' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    session_entity_types: Optional[List[googleclouddialogflowcxv3beta1sessionentitytype.GoogleCloudDialogflowCxV3beta1SessionEntityType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionEntityTypes' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    webhook_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookHeaders' }})
    

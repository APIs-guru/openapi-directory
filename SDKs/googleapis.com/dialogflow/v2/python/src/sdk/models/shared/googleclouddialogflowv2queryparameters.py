from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2QueryParameters:
    r"""GoogleCloudDialogflowV2QueryParameters
    Represents the parameters of the conversational query.
    """
    
    contexts: Optional[List[GoogleCloudDialogflowV2Context]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    geo_location: Optional[GoogleTypeLatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoLocation') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    reset_contexts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resetContexts') }})
    sentiment_analysis_request_config: Optional[GoogleCloudDialogflowV2SentimentAnalysisRequestConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentAnalysisRequestConfig') }})
    session_entity_types: Optional[List[GoogleCloudDialogflowV2SessionEntityType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionEntityTypes') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    webhook_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookHeaders') }})
    

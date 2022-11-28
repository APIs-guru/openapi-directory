from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3QueryParameters:
    r"""GoogleCloudDialogflowCxV3QueryParameters
    Represents the parameters of a conversational query.
    """
    
    analyze_query_text_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzeQueryTextSentiment') }})
    current_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    disable_webhook: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableWebhook') }})
    flow_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowVersions') }})
    geo_location: Optional[GoogleTypeLatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoLocation') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    session_entity_types: Optional[List[GoogleCloudDialogflowCxV3SessionEntityType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionEntityTypes') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    webhook_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookHeaders') }})
    

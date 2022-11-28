from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetIosReopenAttributionResponse:
    r"""GetIosReopenAttributionResponse
    Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
    """
    
    deep_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deepLink') }})
    invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitationId') }})
    ios_min_app_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosMinAppVersion') }})
    resolved_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedLink') }})
    utm_campaign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmCampaign') }})
    utm_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmContent') }})
    utm_medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmMedium') }})
    utm_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmSource') }})
    utm_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmTerm') }})
    

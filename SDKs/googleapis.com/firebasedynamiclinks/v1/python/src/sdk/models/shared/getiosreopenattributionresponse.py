from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetIosReopenAttributionResponse:
    deep_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deepLink' }})
    invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitationId' }})
    ios_min_app_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosMinAppVersion' }})
    resolved_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedLink' }})
    utm_campaign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmCampaign' }})
    utm_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmContent' }})
    utm_medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmMedium' }})
    utm_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmSource' }})
    utm_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmTerm' }})
    

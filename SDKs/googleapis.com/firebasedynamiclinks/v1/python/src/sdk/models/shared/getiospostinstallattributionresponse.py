from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GetIosPostInstallAttributionResponseAttributionConfidenceEnum(str, Enum):
    UNKNOWN_ATTRIBUTION_CONFIDENCE = "UNKNOWN_ATTRIBUTION_CONFIDENCE"
    WEAK = "WEAK"
    DEFAULT = "DEFAULT"
    UNIQUE = "UNIQUE"

class GetIosPostInstallAttributionResponseRequestIPVersionEnum(str, Enum):
    UNKNOWN_IP_VERSION = "UNKNOWN_IP_VERSION"
    IP_V4 = "IP_V4"
    IP_V6 = "IP_V6"


@dataclass_json
@dataclass
class GetIosPostInstallAttributionResponse:
    app_minimum_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appMinimumVersion' }})
    attribution_confidence: Optional[GetIosPostInstallAttributionResponseAttributionConfidenceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionConfidence' }})
    deep_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deepLink' }})
    external_browser_destination_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalBrowserDestinationLink' }})
    fallback_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fallbackLink' }})
    invitation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitationId' }})
    is_strong_match_executable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isStrongMatchExecutable' }})
    match_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchMessage' }})
    request_ip_version: Optional[GetIosPostInstallAttributionResponseRequestIPVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestIpVersion' }})
    requested_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedLink' }})
    resolved_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolvedLink' }})
    utm_campaign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmCampaign' }})
    utm_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmContent' }})
    utm_medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmMedium' }})
    utm_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmSource' }})
    utm_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utmTerm' }})
    

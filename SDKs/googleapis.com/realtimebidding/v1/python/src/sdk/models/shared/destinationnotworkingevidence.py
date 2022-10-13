from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DestinationNotWorkingEvidenceDNSErrorEnum(str, Enum):
    DNS_ERROR_UNSPECIFIED = "DNS_ERROR_UNSPECIFIED"
    ERROR_DNS = "ERROR_DNS"
    GOOGLE_CRAWLER_DNS_ISSUE = "GOOGLE_CRAWLER_DNS_ISSUE"

class DestinationNotWorkingEvidenceInvalidPageEnum(str, Enum):
    INVALID_PAGE_UNSPECIFIED = "INVALID_PAGE_UNSPECIFIED"
    EMPTY_OR_ERROR_PAGE = "EMPTY_OR_ERROR_PAGE"

class DestinationNotWorkingEvidencePlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    PERSONAL_COMPUTER = "PERSONAL_COMPUTER"
    ANDROID = "ANDROID"
    IOS = "IOS"

class DestinationNotWorkingEvidenceRedirectionErrorEnum(str, Enum):
    REDIRECTION_ERROR_UNSPECIFIED = "REDIRECTION_ERROR_UNSPECIFIED"
    TOO_MANY_REDIRECTS = "TOO_MANY_REDIRECTS"
    INVALID_REDIRECT = "INVALID_REDIRECT"
    EMPTY_REDIRECT = "EMPTY_REDIRECT"
    REDIRECT_ERROR_UNKNOWN = "REDIRECT_ERROR_UNKNOWN"

class DestinationNotWorkingEvidenceURLRejectedEnum(str, Enum):
    URL_REJECTED_UNSPECIFIED = "URL_REJECTED_UNSPECIFIED"
    BAD_REQUEST = "BAD_REQUEST"
    MALFORMED_URL = "MALFORMED_URL"
    URL_REJECTED_UNKNOWN = "URL_REJECTED_UNKNOWN"


@dataclass_json
@dataclass
class DestinationNotWorkingEvidence:
    dns_error: Optional[DestinationNotWorkingEvidenceDNSErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsError' }})
    expanded_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expandedUrl' }})
    http_error: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpError' }})
    invalid_page: Optional[DestinationNotWorkingEvidenceInvalidPageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidPage' }})
    last_check_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastCheckTime' }})
    platform: Optional[DestinationNotWorkingEvidencePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    redirection_error: Optional[DestinationNotWorkingEvidenceRedirectionErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectionError' }})
    url_rejected: Optional[DestinationNotWorkingEvidenceURLRejectedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlRejected' }})
    

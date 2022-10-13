from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RepositoryErrorTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    NETWORK_ERROR = "NETWORK_ERROR"
    DNS_ERROR = "DNS_ERROR"
    CONNECTION_ERROR = "CONNECTION_ERROR"
    AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR"
    AUTHORIZATION_ERROR = "AUTHORIZATION_ERROR"
    SERVER_ERROR = "SERVER_ERROR"
    QUOTA_EXCEEDED = "QUOTA_EXCEEDED"
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"
    CLIENT_ERROR = "CLIENT_ERROR"


@dataclass_json
@dataclass
class RepositoryError:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    http_status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpStatusCode' }})
    type: Optional[RepositoryErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

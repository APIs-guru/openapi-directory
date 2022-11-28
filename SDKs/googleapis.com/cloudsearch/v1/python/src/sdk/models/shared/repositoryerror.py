from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""RepositoryError
    Errors when the connector is communicating to the source repository.
    """
    
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    http_status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatusCode') }})
    type: Optional[RepositoryErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

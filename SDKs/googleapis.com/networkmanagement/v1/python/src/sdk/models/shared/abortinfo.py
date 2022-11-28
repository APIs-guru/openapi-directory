from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AbortInfoCauseEnum(str, Enum):
    CAUSE_UNSPECIFIED = "CAUSE_UNSPECIFIED"
    UNKNOWN_NETWORK = "UNKNOWN_NETWORK"
    UNKNOWN_IP = "UNKNOWN_IP"
    UNKNOWN_PROJECT = "UNKNOWN_PROJECT"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    NO_SOURCE_LOCATION = "NO_SOURCE_LOCATION"
    INVALID_ARGUMENT = "INVALID_ARGUMENT"
    NO_EXTERNAL_IP = "NO_EXTERNAL_IP"
    UNINTENDED_DESTINATION = "UNINTENDED_DESTINATION"
    TRACE_TOO_LONG = "TRACE_TOO_LONG"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    SOURCE_ENDPOINT_NOT_FOUND = "SOURCE_ENDPOINT_NOT_FOUND"
    MISMATCHED_SOURCE_NETWORK = "MISMATCHED_SOURCE_NETWORK"
    DESTINATION_ENDPOINT_NOT_FOUND = "DESTINATION_ENDPOINT_NOT_FOUND"
    MISMATCHED_DESTINATION_NETWORK = "MISMATCHED_DESTINATION_NETWORK"
    UNSUPPORTED = "UNSUPPORTED"
    MISMATCHED_IP_VERSION = "MISMATCHED_IP_VERSION"
    GKE_KONNECTIVITY_PROXY_UNSUPPORTED = "GKE_KONNECTIVITY_PROXY_UNSUPPORTED"


@dataclass_json
@dataclass
class AbortInfo:
    r"""AbortInfo
    Details of the final state \"abort\" and associated resource.
    """
    
    cause: Optional[AbortInfoCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    projects_missing_permission: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectsMissingPermission') }})
    resource_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUri') }})
    

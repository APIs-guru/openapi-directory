from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ValidateConsumerConfigResponseValidationErrorEnum(str, Enum):
    VALIDATION_ERROR_UNSPECIFIED = "VALIDATION_ERROR_UNSPECIFIED"
    VALIDATION_NOT_REQUESTED = "VALIDATION_NOT_REQUESTED"
    SERVICE_NETWORKING_NOT_ENABLED = "SERVICE_NETWORKING_NOT_ENABLED"
    NETWORK_NOT_FOUND = "NETWORK_NOT_FOUND"
    NETWORK_NOT_PEERED = "NETWORK_NOT_PEERED"
    NETWORK_PEERING_DELETED = "NETWORK_PEERING_DELETED"
    NETWORK_NOT_IN_CONSUMERS_PROJECT = "NETWORK_NOT_IN_CONSUMERS_PROJECT"
    NETWORK_NOT_IN_CONSUMERS_HOST_PROJECT = "NETWORK_NOT_IN_CONSUMERS_HOST_PROJECT"
    HOST_PROJECT_NOT_FOUND = "HOST_PROJECT_NOT_FOUND"
    CONSUMER_PROJECT_NOT_SERVICE_PROJECT = "CONSUMER_PROJECT_NOT_SERVICE_PROJECT"
    RANGES_EXHAUSTED = "RANGES_EXHAUSTED"
    RANGES_NOT_RESERVED = "RANGES_NOT_RESERVED"
    RANGES_DELETED_LATER = "RANGES_DELETED_LATER"
    COMPUTE_API_NOT_ENABLED = "COMPUTE_API_NOT_ENABLED"
    USE_PERMISSION_NOT_FOUND = "USE_PERMISSION_NOT_FOUND"


@dataclass_json
@dataclass
class ValidateConsumerConfigResponse:
    existing_subnetwork_candidates: Optional[List[Subnetwork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingSubnetworkCandidates') }})
    is_valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isValid') }})
    validation_error: Optional[ValidateConsumerConfigResponseValidationErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationError') }})
    

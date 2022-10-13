from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nicalleridentity
from . import nicurrentcarrierproperties
from . import niinitialcarrierproperties
from . import nirealtimedata
from . import niroaming

class NiResponseJSONAdvancedSyncPortedEnum(str, Enum):
    UNKNOWN = "unknown"
    PORTED = "ported"
    NOT_PORTED = "not_ported"
    ASSUMED_NOT_PORTED = "assumed_not_ported"
    ASSUMED_PORTED = "assumed_ported"
    NULL = "null"

class NiResponseJSONAdvancedSyncReachableEnum(str, Enum):
    UNKNOWN = "unknown"
    REACHABLE = "reachable"
    UNDELIVERABLE = "undeliverable"
    ABSENT = "absent"
    BAD_NUMBER = "bad_number"
    BLACKLISTED = "blacklisted"
    NULL = "null"

class NiResponseJSONAdvancedSyncValidNumberEnum(str, Enum):
    UNKNOWN = "unknown"
    VALID = "valid"
    NOT_VALID = "not_valid"
    INFERRED = "inferred"
    INFERRED_NOT_VALID = "inferred_not_valid"


@dataclass_json
@dataclass
class NiResponseJSONAdvancedSync:
    caller_identity: Optional[nicalleridentity.NiCallerIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller_identity' }})
    country_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    country_code_iso3: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code_iso3' }})
    country_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_name' }})
    country_prefix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_prefix' }})
    current_carrier: Optional[nicurrentcarrierproperties.NiCurrentCarrierProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_carrier' }})
    international_format_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'international_format_number' }})
    lookup_outcome: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookup_outcome' }})
    lookup_outcome_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookup_outcome_message' }})
    national_format_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'national_format_number' }})
    original_carrier: Optional[niinitialcarrierproperties.NiInitialCarrierProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_carrier' }})
    ported: Optional[NiResponseJSONAdvancedSyncPortedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ported' }})
    reachable: Optional[NiResponseJSONAdvancedSyncReachableEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reachable' }})
    real_time_data: Optional[nirealtimedata.NiRealtimeData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'real_time_data' }})
    refund_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund_price' }})
    remaining_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining_balance' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_price' }})
    roaming: Optional[niroaming.NiRoaming] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roaming' }})
    status: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_message' }})
    valid_number: Optional[NiResponseJSONAdvancedSyncValidNumberEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid_number' }})
    

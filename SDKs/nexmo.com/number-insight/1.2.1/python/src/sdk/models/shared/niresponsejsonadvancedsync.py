from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""NiResponseJSONAdvancedSync
    Advanced Response (sync)
    """
    
    country_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    country_code_iso3: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code_iso3') }})
    country_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_name') }})
    country_prefix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_prefix') }})
    international_format_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('international_format_number') }})
    national_format_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('national_format_number') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_message') }})
    caller_identity: Optional[NiCallerIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_identity') }})
    current_carrier: Optional[NiCurrentCarrierProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_carrier') }})
    lookup_outcome: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookup_outcome') }})
    lookup_outcome_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookup_outcome_message') }})
    original_carrier: Optional[NiInitialCarrierProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_carrier') }})
    ported: Optional[NiResponseJSONAdvancedSyncPortedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ported') }})
    reachable: Optional[NiResponseJSONAdvancedSyncReachableEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachable') }})
    real_time_data: Optional[NiRealtimeData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('real_time_data') }})
    refund_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refund_price') }})
    remaining_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining_balance') }})
    request_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_price') }})
    roaming: Optional[NiRoaming] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roaming') }})
    valid_number: Optional[NiResponseJSONAdvancedSyncValidNumberEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid_number') }})
    

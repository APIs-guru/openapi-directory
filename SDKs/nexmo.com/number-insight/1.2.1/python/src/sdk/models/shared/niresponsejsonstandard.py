from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NiResponseJSONStandardCallerTypeEnum(str, Enum):
    BUSINESS = "business"
    CONSUMER = "consumer"
    UNKNOWN = "unknown"

class NiResponseJSONStandardCurrentCarrierNetworkTypeEnum(str, Enum):
    MOBILE = "mobile"
    LANDLINE = "landline"
    LANDLINE_PREMIUM = "landline_premium"
    LANDLINE_TOLLFREE = "landline_tollfree"
    VIRTUAL = "virtual"
    UNKNOWN = "unknown"
    PAGER = "pager"
    NULL = "null"


@dataclass_json
@dataclass
class NiResponseJSONStandardCurrentCarrier:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_code') }})
    network_type: Optional[NiResponseJSONStandardCurrentCarrierNetworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_type') }})
    
class NiResponseJSONStandardPortedEnum(str, Enum):
    UNKNOWN = "unknown"
    PORTED = "ported"
    NOT_PORTED = "not_ported"
    ASSUMED_NOT_PORTED = "assumed_not_ported"
    ASSUMED_PORTED = "assumed_ported"
    NULL = "null"


@dataclass_json
@dataclass
class NiResponseJSONStandard:
    r"""NiResponseJSONStandard
    Standard Response
    """
    
    caller_identity: Optional[NiCallerIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_identity') }})
    caller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_name') }})
    caller_type: Optional[NiResponseJSONStandardCallerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caller_type') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    country_code_iso3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code_iso3') }})
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_name') }})
    country_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_prefix') }})
    current_carrier: Optional[NiResponseJSONStandardCurrentCarrier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_carrier') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    international_format_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('international_format_number') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    national_format_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('national_format_number') }})
    original_carrier: Optional[NiInitialCarrierProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_carrier') }})
    ported: Optional[NiResponseJSONStandardPortedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ported') }})
    refund_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refund_price') }})
    remaining_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining_balance') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    request_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_price') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_message') }})
    

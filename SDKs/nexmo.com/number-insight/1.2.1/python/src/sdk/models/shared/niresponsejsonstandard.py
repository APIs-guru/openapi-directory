from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nicalleridentity
from . import niinitialcarrierproperties

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
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_code' }})
    network_type: Optional[NiResponseJSONStandardCurrentCarrierNetworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_type' }})
    
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
    caller_identity: Optional[nicalleridentity.NiCallerIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller_identity' }})
    caller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller_name' }})
    caller_type: Optional[NiResponseJSONStandardCallerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller_type' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    country_code_iso3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code_iso3' }})
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_name' }})
    country_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_prefix' }})
    current_carrier: Optional[NiResponseJSONStandardCurrentCarrier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_carrier' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    international_format_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'international_format_number' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    national_format_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'national_format_number' }})
    original_carrier: Optional[niinitialcarrierproperties.NiInitialCarrierProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_carrier' }})
    ported: Optional[NiResponseJSONStandardPortedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ported' }})
    refund_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund_price' }})
    remaining_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining_balance' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    request_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_price' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_message' }})
    

from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from . import *

class NiResponseXMLStandardCallerIdentityCallerTypeEnum(str, Enum):
    BUSINESS = "business"
    CONSUMER = "consumer"
    UNKNOWN = "unknown"


@dataclass
class NiResponseXMLStandardCallerIdentity:
    r"""NiResponseXMLStandardCallerIdentity
    Contains details of the number owner, if `cnam` was set to `true` in the request.
    """
    
    caller_name: Optional[str] = field(default=None)
    caller_type: Optional[NiResponseXMLStandardCallerIdentityCallerTypeEnum] = field(default=None)
    caller_name1: Optional[str] = field(default=None)
    caller_type1: Optional[NiResponseXMLStandardCallerIdentityCallerTypeEnum] = field(default=None)
    firs_name: Optional[str] = field(default=None)
    first_name: Optional[str] = field(default=None)
    last_name: Optional[str] = field(default=None)
    last_name1: Optional[str] = field(default=None)
    
class NiResponseXMLStandardCurrentCarrierNetworkTypeEnum(str, Enum):
    MOBILE = "mobile"
    LANDLINE = "landline"
    LANDLINE_PREMIUM = "landline_premium"
    LANDLINE_TOLLFREE = "landline_tollfree"
    VIRTUAL = "virtual"
    UNKNOWN = "unknown"
    PAGER = "pager"
    NULL = "null"


@dataclass
class NiResponseXMLStandardCurrentCarrier:
    country: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    network_code: Optional[str] = field(default=None)
    network_type: Optional[NiResponseXMLStandardCurrentCarrierNetworkTypeEnum] = field(default=None)
    

@dataclass
class NiResponseXMLStandardError:
    r"""NiResponseXMLStandardError
    The error code and status of your request
    """
    
    code: Optional[str] = field(default=None)
    status_text: Optional[str] = field(default=None)
    

@dataclass
class NiResponseXMLStandardLocalNumber:
    r"""NiResponseXMLStandardLocalNumber
    An object containing the `number` in your request in the format used by the country the number belongs to.
    """
    
    country_code: Optional[str] = field(default=None)
    country_code_iso3: Optional[str] = field(default=None)
    country_name: Optional[str] = field(default=None)
    country_prefix: Optional[str] = field(default=None)
    number: Optional[str] = field(default=None)
    

@dataclass
class NiResponseXMLStandard:
    r"""NiResponseXMLStandard
    Standard
    """
    
    caller_identity: Optional[NiResponseXMLStandardCallerIdentity] = field(default=None)
    current_carrier: Optional[NiResponseXMLStandardCurrentCarrier] = field(default=None)
    error: Optional[NiResponseXMLStandardError] = field(default=None)
    international_format_number: Optional[str] = field(default=None)
    local_number: Optional[NiResponseXMLStandardLocalNumber] = field(default=None)
    original_carrier: Optional[NiInitialCarrierProperties] = field(default=None)
    ported: Optional[Any] = field(default=None)
    remaining_balance: Optional[str] = field(default=None)
    request_id: Optional[str] = field(default=None)
    request_price: Optional[str] = field(default=None)
    

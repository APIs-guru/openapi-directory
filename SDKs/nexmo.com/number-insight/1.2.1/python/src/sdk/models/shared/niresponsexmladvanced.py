from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from . import *

class NiResponseXMLAdvancedCallerTypeEnum(str, Enum):
    BUSINESS = "business"
    CONSUMER = "consumer"
    UNKNOWN = "unknown"


@dataclass
class NiResponseXMLAdvancedError:
    r"""NiResponseXMLAdvancedError
    The error code and status of your request
    """
    
    code: Optional[str] = field(default=None)
    status_text: Optional[str] = field(default=None)
    

@dataclass
class NiResponseXMLAdvancedLocalNumber:
    r"""NiResponseXMLAdvancedLocalNumber
    An object containing the `number` in your request in the format used by the country the number belongs to.
    """
    
    country_code: Optional[str] = field(default=None)
    country_code_iso3: Optional[str] = field(default=None)
    country_name: Optional[str] = field(default=None)
    country_prefix: Optional[str] = field(default=None)
    number: Optional[str] = field(default=None)
    

@dataclass
class NiResponseXMLAdvancedLookupOutcome:
    r"""NiResponseXMLAdvancedLookupOutcome
    An object indicating whether all information about a phone number has been returned.
    """
    
    code: Optional[Any] = field(default=None)
    lookup_outcome_message: Optional[str] = field(default=None)
    
class NiResponseXMLAdvancedReachableEnum(str, Enum):
    UNKNOWN = "unknown"
    REACHABLE = "reachable"
    UNDELIVERABLE = "undeliverable"
    ABSENT = "absent"
    BAD_NUMBER = "bad_number"
    BLACKLISTED = "blacklisted"
    NULL = "null"

class NiResponseXMLAdvancedValidNumberEnum(str, Enum):
    UNKNOWN = "unknown"
    VALID = "valid"
    NOT_VALID = "not_valid"
    INFERRED_NOT_VALID = "inferred_not_valid"


@dataclass
class NiResponseXMLAdvanced:
    r"""NiResponseXMLAdvanced
    Advanced
    """
    
    caller_identity: Optional[Any] = field(default=None)
    caller_name: Optional[str] = field(default=None)
    caller_type: Optional[NiResponseXMLAdvancedCallerTypeEnum] = field(default=None)
    current_carrier: Optional[NiCurrentCarrierProperties] = field(default=None)
    error: Optional[NiResponseXMLAdvancedError] = field(default=None)
    firs_name: Optional[str] = field(default=None)
    international_format_number: Optional[str] = field(default=None)
    ip_warnings: Optional[str] = field(default=None)
    last_name: Optional[str] = field(default=None)
    local_number: Optional[NiResponseXMLAdvancedLocalNumber] = field(default=None)
    lookup_outcome: Optional[NiResponseXMLAdvancedLookupOutcome] = field(default=None)
    original_carrier: Optional[NiInitialCarrierProperties] = field(default=None)
    ported: Optional[Any] = field(default=None)
    reachable: Optional[NiResponseXMLAdvancedReachableEnum] = field(default=None)
    remaining_balance: Optional[str] = field(default=None)
    request_id: Optional[str] = field(default=None)
    request_price: Optional[str] = field(default=None)
    roaming: Optional[NiRoaming] = field(default=None)
    valid_number: Optional[NiResponseXMLAdvancedValidNumberEnum] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NiResponseXMLBasicError:
    r"""NiResponseXMLBasicError
    The error code and status of your request
    """
    
    code: Optional[str] = field(default=None)
    status_text: Optional[str] = field(default=None)
    

@dataclass
class NiResponseXMLBasicLocalNumber:
    r"""NiResponseXMLBasicLocalNumber
    An object containing the `number` in your request in the format used by the country the number belongs to.
    """
    
    country_code: Optional[str] = field(default=None)
    country_code_iso3: Optional[str] = field(default=None)
    country_name: Optional[str] = field(default=None)
    country_prefix: Optional[str] = field(default=None)
    number: Optional[str] = field(default=None)
    

@dataclass
class NiResponseXMLBasic:
    r"""NiResponseXMLBasic
    Basic
    """
    
    error: Optional[NiResponseXMLBasicError] = field(default=None)
    international_format_number: Optional[str] = field(default=None)
    local_number: Optional[NiResponseXMLBasicLocalNumber] = field(default=None)
    request_id: Optional[str] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetCreditCreditEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclass
class GetCreditQueryParams:
    credit: GetCreditCreditEnum = field(default=None, metadata={'query_param': { 'field_name': 'credit', 'style': 'form', 'explode': True }})
    keyid: str = field(default=None, metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreditRequest:
    query_params: GetCreditQueryParams = field(default=None)
    

@dataclass
class GetCreditResponse:
    content_type: str = field(default=None)
    credit_response: Optional[shared.CreditResponse] = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    status_code: int = field(default=None)
    

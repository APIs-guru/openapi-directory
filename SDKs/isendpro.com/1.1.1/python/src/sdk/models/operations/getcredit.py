from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetCreditCreditEnum(str, Enum):
    ONE = "1"
    TWO = "2"


@dataclass
class GetCreditQueryParams:
    credit: GetCreditCreditEnum = field(metadata={'query_param': { 'field_name': 'credit', 'style': 'form', 'explode': True }})
    keyid: str = field(metadata={'query_param': { 'field_name': 'keyid', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreditRequest:
    query_params: GetCreditQueryParams = field()
    

@dataclass
class GetCreditResponse:
    content_type: str = field()
    status_code: int = field()
    credit_response: Optional[shared.CreditResponse] = field(default=None)
    erreur: Optional[shared.Erreur] = field(default=None)
    

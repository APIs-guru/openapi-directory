from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersIsPalindromeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersIsPalindromeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersIsPalindromeRequest:
    query_params: GetNumbersIsPalindromeQueryParams = field()
    security: GetNumbersIsPalindromeSecurity = field()
    

@dataclass
class GetNumbersIsPalindromeResponse:
    content_type: str = field()
    status_code: int = field()
    

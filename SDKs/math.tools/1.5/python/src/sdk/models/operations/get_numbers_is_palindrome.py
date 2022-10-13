from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNumbersIsPalindromeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersIsPalindromeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersIsPalindromeRequest:
    query_params: GetNumbersIsPalindromeQueryParams = field(default=None)
    security: GetNumbersIsPalindromeSecurity = field(default=None)
    

@dataclass
class GetNumbersIsPalindromeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

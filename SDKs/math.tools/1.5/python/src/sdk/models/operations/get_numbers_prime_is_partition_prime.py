from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNumbersPrimeIsPartitionPrimeQueryParams:
    number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersPrimeIsPartitionPrimeSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersPrimeIsPartitionPrimeRequest:
    query_params: GetNumbersPrimeIsPartitionPrimeQueryParams = field()
    security: GetNumbersPrimeIsPartitionPrimeSecurity = field()
    

@dataclass
class GetNumbersPrimeIsPartitionPrimeResponse:
    content_type: str = field()
    status_code: int = field()
    

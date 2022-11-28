from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1CustomersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CustomersIDRequest:
    path_params: GetSetupV1CustomersIDPathParams = field()
    

@dataclass
class GetSetupV1CustomersIDResponse:
    content_type: str = field()
    status_code: int = field()
    customer_view_model: Optional[shared.CustomerViewModel] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPolicyModulePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPolicyModuleQueryParams:
    pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPolicyModuleRequest:
    path_params: GetPolicyModulePathParams = field()
    query_params: GetPolicyModuleQueryParams = field()
    

@dataclass
class GetPolicyModuleResponse:
    content_type: str = field()
    status_code: int = field()
    two_hundred_result: Optional[shared.TwoHundredResult] = field(default=None)
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    four_hundred_and_four: Optional[shared.FourHundredAndFour] = field(default=None)
    

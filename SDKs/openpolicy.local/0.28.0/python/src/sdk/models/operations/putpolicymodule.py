from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutPolicyModulePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPolicyModuleQueryParams:
    metrics: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'metrics', 'style': 'form', 'explode': True }})
    pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class PutPolicyModuleRequest:
    path_params: PutPolicyModulePathParams = field(default=None)
    query_params: PutPolicyModuleQueryParams = field(default=None)
    request: str = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutPolicyModuleResponse:
    two_hundred_result: Optional[shared.TwoHundredResult] = field(default=None)
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

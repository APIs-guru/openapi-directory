from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteLocationRulePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLocationRuleRequest:
    path_params: DeleteLocationRulePathParams = field()
    

@dataclass
class DeleteLocationRuleResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    

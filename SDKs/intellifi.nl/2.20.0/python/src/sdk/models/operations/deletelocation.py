from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteLocationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLocationRequest:
    path_params: DeleteLocationPathParams = field()
    

@dataclass
class DeleteLocationResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    

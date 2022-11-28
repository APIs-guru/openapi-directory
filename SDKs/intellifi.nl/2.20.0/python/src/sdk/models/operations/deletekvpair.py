from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteKvPairPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteKvPairRequest:
    path_params: DeleteKvPairPathParams = field()
    

@dataclass
class DeleteKvPairResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    

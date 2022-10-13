from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteKvPairPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteKvPairRequest:
    path_params: DeleteKvPairPathParams = field(default=None)
    

@dataclass
class DeleteKvPairResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    

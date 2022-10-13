from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateLocationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLocationRequest:
    path_params: UpdateLocationPathParams = field(default=None)
    request: shared.Location = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLocationResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    

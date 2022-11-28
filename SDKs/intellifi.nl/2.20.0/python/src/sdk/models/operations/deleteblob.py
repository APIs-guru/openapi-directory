from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteBlobPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBlobRequest:
    path_params: DeleteBlobPathParams = field()
    

@dataclass
class DeleteBlobResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PreviewsReadPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreviewsReadRequest:
    path_params: PreviewsReadPathParams = field()
    

@dataclass
class PreviewsReadResponse:
    content_type: str = field()
    status_code: int = field()
    preview_response: Optional[shared.PreviewResponse] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PreviewsReadPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreviewsReadRequest:
    path_params: PreviewsReadPathParams = field(default=None)
    

@dataclass
class PreviewsReadResponse:
    content_type: str = field(default=None)
    preview_response: Optional[shared.PreviewResponse] = field(default=None)
    status_code: int = field(default=None)
    

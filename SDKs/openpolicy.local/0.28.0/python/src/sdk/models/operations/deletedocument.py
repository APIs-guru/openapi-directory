from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDocumentPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocumentRequest:
    path_params: DeleteDocumentPathParams = field(default=None)
    

@dataclass
class DeleteDocumentResponse:
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    four_hundred_and_four: Optional[shared.FourHundredAndFour] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

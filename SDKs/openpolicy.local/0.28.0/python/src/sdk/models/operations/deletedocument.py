from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDocumentPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocumentRequest:
    path_params: DeleteDocumentPathParams = field()
    

@dataclass
class DeleteDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    four_hundred_and_four: Optional[shared.FourHundredAndFour] = field(default=None)
    

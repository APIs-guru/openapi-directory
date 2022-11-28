from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchDocumentPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchDocumentRequest:
    path_params: PatchDocumentPathParams = field()
    request: List[shared.PatchesSchema] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    four_hundred_and_four: Optional[shared.FourHundredAndFour] = field(default=None)
    

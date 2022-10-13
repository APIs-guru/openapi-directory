from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchDocumentPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchDocumentRequest:
    path_params: PatchDocumentPathParams = field(default=None)
    request: List[shared.PatchesSchema] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchDocumentResponse:
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    four_hundred_and_four: Optional[shared.FourHundredAndFour] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

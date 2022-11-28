from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDocumentPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDocumentHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDocumentRequest:
    headers: PutDocumentHeaders = field()
    path_params: PutDocumentPathParams = field()
    

@dataclass
class PutDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    four_hundred_and_four: Optional[shared.FourHundredAndFour] = field(default=None)
    

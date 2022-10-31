from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDocumentPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDocumentHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDocumentRequest:
    path_params: PutDocumentPathParams = field(default=None)
    headers: PutDocumentHeaders = field(default=None)
    

@dataclass
class PutDocumentResponse:
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    four_hundred_and_four: Optional[shared.FourHundredAndFour] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

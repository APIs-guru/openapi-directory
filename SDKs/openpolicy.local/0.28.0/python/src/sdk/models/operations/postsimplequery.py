from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostSimpleQueryQueryParams:
    pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class PostSimpleQueryRequest:
    query_params: PostSimpleQueryQueryParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSimpleQueryResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred: Optional[shared.FourHundred] = field(default=None)
    four_hundred_and_four: Optional[shared.FourHundredAndFour] = field(default=None)
    

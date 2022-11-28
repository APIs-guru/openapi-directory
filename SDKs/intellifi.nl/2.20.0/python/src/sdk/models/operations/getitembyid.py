from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemByIDRequest:
    path_params: GetItemByIDPathParams = field()
    

@dataclass
class GetItemByIDResponse:
    content_type: str = field()
    status_code: int = field()
    item: Optional[shared.Item] = field(default=None)
    

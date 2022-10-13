from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemByIDRequest:
    path_params: GetItemByIDPathParams = field(default=None)
    

@dataclass
class GetItemByIDResponse:
    content_type: str = field(default=None)
    item: Optional[shared.Item] = field(default=None)
    status_code: int = field(default=None)
    

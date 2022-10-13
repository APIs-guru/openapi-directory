from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesMediaIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDJSONRequest:
    path_params: GetResourcesMediaIDJSONPathParams = field(default=None)
    

@dataclass
class GetResourcesMediaIDJSONResponse:
    content_type: str = field(default=None)
    media_item_wrappeds: Optional[List[shared.MediaItemWrapped]] = field(default=None)
    status_code: int = field(default=None)
    

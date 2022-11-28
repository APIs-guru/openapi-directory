from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesUserMediaListsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesUserMediaListsIDJSONQueryParams:
    display_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesUserMediaListsIDJSONRequest:
    path_params: GetResourcesUserMediaListsIDJSONPathParams = field()
    query_params: GetResourcesUserMediaListsIDJSONQueryParams = field()
    

@dataclass
class GetResourcesUserMediaListsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    media_item_wrappeds: Optional[List[shared.MediaItemWrapped]] = field(default=None)
    

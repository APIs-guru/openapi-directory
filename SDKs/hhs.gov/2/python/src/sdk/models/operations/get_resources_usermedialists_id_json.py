from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesUserMediaListsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesUserMediaListsIDJSONQueryParams:
    display_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesUserMediaListsIDJSONRequest:
    path_params: GetResourcesUserMediaListsIDJSONPathParams = field(default=None)
    query_params: GetResourcesUserMediaListsIDJSONQueryParams = field(default=None)
    

@dataclass
class GetResourcesUserMediaListsIDJSONResponse:
    content_type: str = field(default=None)
    media_item_wrappeds: Optional[List[shared.MediaItemWrapped]] = field(default=None)
    status_code: int = field(default=None)
    

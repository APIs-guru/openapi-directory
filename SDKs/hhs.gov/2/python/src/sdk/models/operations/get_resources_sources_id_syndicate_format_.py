from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesSourcesIDSyndicateFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesSourcesIDSyndicateFormatQueryParams:
    display_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesSourcesIDSyndicateFormatRequest:
    path_params: GetResourcesSourcesIDSyndicateFormatPathParams = field()
    query_params: GetResourcesSourcesIDSyndicateFormatQueryParams = field()
    

@dataclass
class GetResourcesSourcesIDSyndicateFormatResponse:
    content_type: str = field()
    status_code: int = field()
    media_item_wrappeds: Optional[List[shared.MediaItemWrapped]] = field(default=None)
    

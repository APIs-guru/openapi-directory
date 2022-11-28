from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetResourcesCampaignsIDMediaJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesCampaignsIDMediaJSONQueryParams:
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesCampaignsIDMediaJSONRequest:
    path_params: GetResourcesCampaignsIDMediaJSONPathParams = field()
    query_params: GetResourcesCampaignsIDMediaJSONQueryParams = field()
    

@dataclass
class GetResourcesCampaignsIDMediaJSONResponse:
    content_type: str = field()
    status_code: int = field()
    media_item_wrapped: Optional[shared.MediaItemWrapped] = field(default=None)
    

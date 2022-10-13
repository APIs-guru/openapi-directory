from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ApplySearchCriteriaPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplySearchCriteriaQueryParams:
    replace_all_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'replaceAllImages', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplySearchCriteriaRequests:
    remote_search_result: Optional[shared.RemoteSearchResult] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    remote_search_result1: Optional[shared.RemoteSearchResult] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    remote_search_result2: Optional[shared.RemoteSearchResult] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ApplySearchCriteriaSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ApplySearchCriteriaRequest:
    path_params: ApplySearchCriteriaPathParams = field(default=None)
    query_params: ApplySearchCriteriaQueryParams = field(default=None)
    request: ApplySearchCriteriaRequests = field(default=None)
    security: ApplySearchCriteriaSecurity = field(default=None)
    

@dataclass
class ApplySearchCriteriaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

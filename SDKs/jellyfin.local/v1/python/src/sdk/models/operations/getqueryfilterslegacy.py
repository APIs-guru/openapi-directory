from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetQueryFiltersLegacyQueryParams:
    include_item_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'includeItemTypes', 'style': 'form', 'explode': True }})
    media_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mediaTypes', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parentId', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryFiltersLegacySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetQueryFiltersLegacyRequest:
    query_params: GetQueryFiltersLegacyQueryParams = field(default=None)
    security: GetQueryFiltersLegacySecurity = field(default=None)
    

@dataclass
class GetQueryFiltersLegacyResponse:
    content_type: str = field(default=None)
    query_filters_legacy: Optional[shared.QueryFiltersLegacy] = field(default=None)
    status_code: int = field(default=None)
    

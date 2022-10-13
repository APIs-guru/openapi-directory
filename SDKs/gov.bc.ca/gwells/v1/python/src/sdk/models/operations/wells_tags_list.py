from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class WellsTagsListQueryParams:
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class WellsTagsListRequest:
    query_params: WellsTagsListQueryParams = field(default=None)
    

@dataclass
class WellsTagsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    well_tag_searches: Optional[List[shared.WellTagSearch]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class WellsTagsListQueryParams:
    ordering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ordering', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class WellsTagsListRequest:
    query_params: WellsTagsListQueryParams = field()
    

@dataclass
class WellsTagsListResponse:
    content_type: str = field()
    status_code: int = field()
    well_tag_searches: Optional[List[shared.WellTagSearch]] = field(default=None)
    

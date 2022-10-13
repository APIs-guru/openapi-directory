from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IpamAggregatesListQueryParams:
    date_added: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_added', 'style': 'form', 'explode': True }})
    family: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rir: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rir', 'style': 'form', 'explode': True }})
    rir_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rir_id', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass
class IpamAggregatesListRequest:
    query_params: IpamAggregatesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class IpamAggregatesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Aggregate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class IpamAggregatesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ipam_aggregates_list_200_application_json_object: Optional[IpamAggregatesList200ApplicationJSON] = field(default=None)
    

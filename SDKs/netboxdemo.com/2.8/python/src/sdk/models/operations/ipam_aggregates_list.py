from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IpamAggregatesListQueryParams:
    created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    created_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__gte', 'style': 'form', 'explode': True }})
    created_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__lte', 'style': 'form', 'explode': True }})
    date_added: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_added', 'style': 'form', 'explode': True }})
    date_added_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_added__gt', 'style': 'form', 'explode': True }})
    date_added_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_added__gte', 'style': 'form', 'explode': True }})
    date_added_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_added__lt', 'style': 'form', 'explode': True }})
    date_added_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_added__lte', 'style': 'form', 'explode': True }})
    date_added_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_added__n', 'style': 'form', 'explode': True }})
    family: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    last_updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated', 'style': 'form', 'explode': True }})
    last_updated_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated__gte', 'style': 'form', 'explode': True }})
    last_updated_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated__lte', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rir: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rir', 'style': 'form', 'explode': True }})
    rir_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rir__n', 'style': 'form', 'explode': True }})
    rir_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rir_id', 'style': 'form', 'explode': True }})
    rir_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rir_id__n', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    

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
    

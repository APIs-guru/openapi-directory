from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ExtrasTopologyMapsListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    slug: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    

@dataclass
class ExtrasTopologyMapsListRequest:
    query_params: ExtrasTopologyMapsListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ExtrasTopologyMapsList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.TopologyMap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class ExtrasTopologyMapsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    extras_topology_maps_list_200_application_json_object: Optional[ExtrasTopologyMapsList200ApplicationJSON] = field(default=None)
    

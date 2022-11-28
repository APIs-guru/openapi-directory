from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class VirtualizationClusterGroupsListQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    description_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description__ic', 'style': 'form', 'explode': True }})
    description_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description__ie', 'style': 'form', 'explode': True }})
    description_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description__iew', 'style': 'form', 'explode': True }})
    description_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description__isw', 'style': 'form', 'explode': True }})
    description_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description__n', 'style': 'form', 'explode': True }})
    description_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description__nic', 'style': 'form', 'explode': True }})
    description_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description__nie', 'style': 'form', 'explode': True }})
    description_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description__niew', 'style': 'form', 'explode': True }})
    description_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description__nisw', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    name_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__ic', 'style': 'form', 'explode': True }})
    name_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__ie', 'style': 'form', 'explode': True }})
    name_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__iew', 'style': 'form', 'explode': True }})
    name_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__isw', 'style': 'form', 'explode': True }})
    name_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__n', 'style': 'form', 'explode': True }})
    name_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__nic', 'style': 'form', 'explode': True }})
    name_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__nie', 'style': 'form', 'explode': True }})
    name_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__niew', 'style': 'form', 'explode': True }})
    name_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__nisw', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    slug: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    slug_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__ic', 'style': 'form', 'explode': True }})
    slug_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__ie', 'style': 'form', 'explode': True }})
    slug_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__iew', 'style': 'form', 'explode': True }})
    slug_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__isw', 'style': 'form', 'explode': True }})
    slug_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__n', 'style': 'form', 'explode': True }})
    slug_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__nic', 'style': 'form', 'explode': True }})
    slug_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__nie', 'style': 'form', 'explode': True }})
    slug_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__niew', 'style': 'form', 'explode': True }})
    slug_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug__nisw', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class VirtualizationClusterGroupsList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.ClusterGroup] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class VirtualizationClusterGroupsListRequest:
    query_params: VirtualizationClusterGroupsListQueryParams = field()
    

@dataclass
class VirtualizationClusterGroupsListResponse:
    content_type: str = field()
    status_code: int = field()
    virtualization_cluster_groups_list_200_application_json_object: Optional[VirtualizationClusterGroupsList200ApplicationJSON] = field(default=None)
    

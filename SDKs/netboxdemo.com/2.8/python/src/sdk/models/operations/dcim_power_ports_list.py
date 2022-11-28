from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DcimPowerPortsListQueryParams:
    allocated_draw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allocated_draw', 'style': 'form', 'explode': True }})
    allocated_draw_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allocated_draw__gt', 'style': 'form', 'explode': True }})
    allocated_draw_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allocated_draw__gte', 'style': 'form', 'explode': True }})
    allocated_draw_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allocated_draw__lt', 'style': 'form', 'explode': True }})
    allocated_draw_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allocated_draw__lte', 'style': 'form', 'explode': True }})
    allocated_draw_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allocated_draw__n', 'style': 'form', 'explode': True }})
    cabled: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cabled', 'style': 'form', 'explode': True }})
    connection_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'connection_status', 'style': 'form', 'explode': True }})
    connection_status_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'connection_status__n', 'style': 'form', 'explode': True }})
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
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device__n', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    device_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id__n', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    maximum_draw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximum_draw', 'style': 'form', 'explode': True }})
    maximum_draw_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximum_draw__gt', 'style': 'form', 'explode': True }})
    maximum_draw_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximum_draw__gte', 'style': 'form', 'explode': True }})
    maximum_draw_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximum_draw__lt', 'style': 'form', 'explode': True }})
    maximum_draw_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximum_draw__lte', 'style': 'form', 'explode': True }})
    maximum_draw_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximum_draw__n', 'style': 'form', 'explode': True }})
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
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region__n', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    region_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id__n', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site__n', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    site_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id__n', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    type_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DcimPowerPortsList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.PowerPort] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class DcimPowerPortsListRequest:
    query_params: DcimPowerPortsListQueryParams = field()
    

@dataclass
class DcimPowerPortsListResponse:
    content_type: str = field()
    status_code: int = field()
    dcim_power_ports_list_200_application_json_object: Optional[DcimPowerPortsList200ApplicationJSON] = field(default=None)
    

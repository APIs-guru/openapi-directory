from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DcimPowerFeedsListQueryParams:
    amperage: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'amperage', 'style': 'form', 'explode': True }})
    amperage_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'amperage__gt', 'style': 'form', 'explode': True }})
    amperage_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'amperage__gte', 'style': 'form', 'explode': True }})
    amperage_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'amperage__lt', 'style': 'form', 'explode': True }})
    amperage_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'amperage__lte', 'style': 'form', 'explode': True }})
    amperage_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'amperage__n', 'style': 'form', 'explode': True }})
    created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    created_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__gte', 'style': 'form', 'explode': True }})
    created_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__lte', 'style': 'form', 'explode': True }})
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
    max_utilization: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_utilization', 'style': 'form', 'explode': True }})
    max_utilization_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_utilization__gt', 'style': 'form', 'explode': True }})
    max_utilization_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_utilization__gte', 'style': 'form', 'explode': True }})
    max_utilization_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_utilization__lt', 'style': 'form', 'explode': True }})
    max_utilization_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_utilization__lte', 'style': 'form', 'explode': True }})
    max_utilization_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max_utilization__n', 'style': 'form', 'explode': True }})
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
    phase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phase', 'style': 'form', 'explode': True }})
    phase_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phase__n', 'style': 'form', 'explode': True }})
    power_panel_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'power_panel_id', 'style': 'form', 'explode': True }})
    power_panel_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'power_panel_id__n', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rack_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rack_id', 'style': 'form', 'explode': True }})
    rack_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rack_id__n', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region__n', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    region_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id__n', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site__n', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    site_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id__n', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    status_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status__n', 'style': 'form', 'explode': True }})
    supply: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'supply', 'style': 'form', 'explode': True }})
    supply_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'supply__n', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    type_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type__n', 'style': 'form', 'explode': True }})
    voltage: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'voltage', 'style': 'form', 'explode': True }})
    voltage_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'voltage__gt', 'style': 'form', 'explode': True }})
    voltage_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'voltage__gte', 'style': 'form', 'explode': True }})
    voltage_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'voltage__lt', 'style': 'form', 'explode': True }})
    voltage_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'voltage__lte', 'style': 'form', 'explode': True }})
    voltage_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'voltage__n', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimPowerFeedsListRequest:
    query_params: DcimPowerFeedsListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DcimPowerFeedsList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.PowerFeed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class DcimPowerFeedsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    dcim_power_feeds_list_200_application_json_object: Optional[DcimPowerFeedsList200ApplicationJSON] = field(default=None)
    

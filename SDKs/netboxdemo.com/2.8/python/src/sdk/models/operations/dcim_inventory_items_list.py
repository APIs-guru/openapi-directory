from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DcimInventoryItemsListQueryParams:
    asset_tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag', 'style': 'form', 'explode': True }})
    asset_tag_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag__ic', 'style': 'form', 'explode': True }})
    asset_tag_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag__ie', 'style': 'form', 'explode': True }})
    asset_tag_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag__iew', 'style': 'form', 'explode': True }})
    asset_tag_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag__isw', 'style': 'form', 'explode': True }})
    asset_tag_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag__n', 'style': 'form', 'explode': True }})
    asset_tag_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag__nic', 'style': 'form', 'explode': True }})
    asset_tag_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag__nie', 'style': 'form', 'explode': True }})
    asset_tag_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag__niew', 'style': 'form', 'explode': True }})
    asset_tag_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag__nisw', 'style': 'form', 'explode': True }})
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device__n', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    device_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id__n', 'style': 'form', 'explode': True }})
    discovered: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'discovered', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    manufacturer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer', 'style': 'form', 'explode': True }})
    manufacturer_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer__n', 'style': 'form', 'explode': True }})
    manufacturer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id', 'style': 'form', 'explode': True }})
    manufacturer_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id__n', 'style': 'form', 'explode': True }})
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
    parent_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent_id', 'style': 'form', 'explode': True }})
    parent_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent_id__n', 'style': 'form', 'explode': True }})
    part_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id', 'style': 'form', 'explode': True }})
    part_id_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id__ic', 'style': 'form', 'explode': True }})
    part_id_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id__ie', 'style': 'form', 'explode': True }})
    part_id_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id__iew', 'style': 'form', 'explode': True }})
    part_id_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id__isw', 'style': 'form', 'explode': True }})
    part_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id__n', 'style': 'form', 'explode': True }})
    part_id_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id__nic', 'style': 'form', 'explode': True }})
    part_id_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id__nie', 'style': 'form', 'explode': True }})
    part_id_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id__niew', 'style': 'form', 'explode': True }})
    part_id_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id__nisw', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region__n', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    region_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id__n', 'style': 'form', 'explode': True }})
    serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serial', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site__n', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    site_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id__n', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DcimInventoryItemsList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.InventoryItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class DcimInventoryItemsListRequest:
    query_params: DcimInventoryItemsListQueryParams = field()
    

@dataclass
class DcimInventoryItemsListResponse:
    content_type: str = field()
    status_code: int = field()
    dcim_inventory_items_list_200_application_json_object: Optional[DcimInventoryItemsList200ApplicationJSON] = field(default=None)
    

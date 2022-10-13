from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DcimInventoryItemsListQueryParams:
    asset_tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag', 'style': 'form', 'explode': True }})
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    discovered: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'discovered', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    manufacturer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer', 'style': 'form', 'explode': True }})
    manufacturer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent_id', 'style': 'form', 'explode': True }})
    part_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_id', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serial', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimInventoryItemsListRequest:
    query_params: DcimInventoryItemsListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DcimInventoryItemsList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.InventoryItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class DcimInventoryItemsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    dcim_inventory_items_list_200_application_json_object: Optional[DcimInventoryItemsList200ApplicationJSON] = field(default=None)
    

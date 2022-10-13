from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DcimDevicesListQueryParams:
    asset_tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'asset_tag', 'style': 'form', 'explode': True }})
    cluster_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_id', 'style': 'form', 'explode': True }})
    device_type_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_type_id', 'style': 'form', 'explode': True }})
    has_primary_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'has_primary_ip', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    is_console_server: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_console_server', 'style': 'form', 'explode': True }})
    is_full_depth: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_full_depth', 'style': 'form', 'explode': True }})
    is_network_device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_network_device', 'style': 'form', 'explode': True }})
    is_pdu: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_pdu', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mac_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address', 'style': 'form', 'explode': True }})
    manufacturer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer', 'style': 'form', 'explode': True }})
    manufacturer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    platform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    platform_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'platform_id', 'style': 'form', 'explode': True }})
    position: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rack_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rack_group_id', 'style': 'form', 'explode': True }})
    rack_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rack_id', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_id: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    role_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role_id', 'style': 'form', 'explode': True }})
    serial: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serial', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    virtual_chassis_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_chassis_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimDevicesListRequest:
    query_params: DcimDevicesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DcimDevicesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class DcimDevicesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    dcim_devices_list_200_application_json_object: Optional[DcimDevicesList200ApplicationJSON] = field(default=None)
    

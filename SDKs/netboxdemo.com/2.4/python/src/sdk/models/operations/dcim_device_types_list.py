from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DcimDeviceTypesListQueryParams:
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    is_console_server: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_console_server', 'style': 'form', 'explode': True }})
    is_full_depth: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_full_depth', 'style': 'form', 'explode': True }})
    is_network_device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_network_device', 'style': 'form', 'explode': True }})
    is_pdu: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_pdu', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    manufacturer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer', 'style': 'form', 'explode': True }})
    manufacturer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    part_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    slug: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    subdevice_role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subdevice_role', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    u_height: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'u_height', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimDeviceTypesListRequest:
    query_params: DcimDeviceTypesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DcimDeviceTypesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.DeviceType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class DcimDeviceTypesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    dcim_device_types_list_200_application_json_object: Optional[DcimDeviceTypesList200ApplicationJSON] = field(default=None)
    

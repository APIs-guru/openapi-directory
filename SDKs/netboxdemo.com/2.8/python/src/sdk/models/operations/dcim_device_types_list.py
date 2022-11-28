from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DcimDeviceTypesListQueryParams:
    console_ports: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'console_ports', 'style': 'form', 'explode': True }})
    console_server_ports: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'console_server_ports', 'style': 'form', 'explode': True }})
    created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    created_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__gte', 'style': 'form', 'explode': True }})
    created_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__lte', 'style': 'form', 'explode': True }})
    device_bays: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_bays', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    interfaces: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interfaces', 'style': 'form', 'explode': True }})
    is_full_depth: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_full_depth', 'style': 'form', 'explode': True }})
    last_updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated', 'style': 'form', 'explode': True }})
    last_updated_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated__gte', 'style': 'form', 'explode': True }})
    last_updated_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated__lte', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    manufacturer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer', 'style': 'form', 'explode': True }})
    manufacturer_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer__n', 'style': 'form', 'explode': True }})
    manufacturer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id', 'style': 'form', 'explode': True }})
    manufacturer_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id__n', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    model_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model__ic', 'style': 'form', 'explode': True }})
    model_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model__ie', 'style': 'form', 'explode': True }})
    model_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model__iew', 'style': 'form', 'explode': True }})
    model_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model__isw', 'style': 'form', 'explode': True }})
    model_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model__n', 'style': 'form', 'explode': True }})
    model_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model__nic', 'style': 'form', 'explode': True }})
    model_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model__nie', 'style': 'form', 'explode': True }})
    model_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model__niew', 'style': 'form', 'explode': True }})
    model_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model__nisw', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    part_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number', 'style': 'form', 'explode': True }})
    part_number_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number__ic', 'style': 'form', 'explode': True }})
    part_number_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number__ie', 'style': 'form', 'explode': True }})
    part_number_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number__iew', 'style': 'form', 'explode': True }})
    part_number_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number__isw', 'style': 'form', 'explode': True }})
    part_number_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number__n', 'style': 'form', 'explode': True }})
    part_number_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number__nic', 'style': 'form', 'explode': True }})
    part_number_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number__nie', 'style': 'form', 'explode': True }})
    part_number_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number__niew', 'style': 'form', 'explode': True }})
    part_number_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'part_number__nisw', 'style': 'form', 'explode': True }})
    pass_through_ports: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pass_through_ports', 'style': 'form', 'explode': True }})
    power_outlets: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'power_outlets', 'style': 'form', 'explode': True }})
    power_ports: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'power_ports', 'style': 'form', 'explode': True }})
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
    subdevice_role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subdevice_role', 'style': 'form', 'explode': True }})
    subdevice_role_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subdevice_role__n', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    u_height: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'u_height', 'style': 'form', 'explode': True }})
    u_height_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'u_height__gt', 'style': 'form', 'explode': True }})
    u_height_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'u_height__gte', 'style': 'form', 'explode': True }})
    u_height_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'u_height__lt', 'style': 'form', 'explode': True }})
    u_height_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'u_height__lte', 'style': 'form', 'explode': True }})
    u_height_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'u_height__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DcimDeviceTypesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.DeviceType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class DcimDeviceTypesListRequest:
    query_params: DcimDeviceTypesListQueryParams = field()
    

@dataclass
class DcimDeviceTypesListResponse:
    content_type: str = field()
    status_code: int = field()
    dcim_device_types_list_200_application_json_object: Optional[DcimDeviceTypesList200ApplicationJSON] = field(default=None)
    

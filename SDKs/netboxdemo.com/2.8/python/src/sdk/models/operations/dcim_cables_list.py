from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DcimCablesListQueryParams:
    color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    color_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'color__n', 'style': 'form', 'explode': True }})
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    label: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label', 'style': 'form', 'explode': True }})
    label_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label__ic', 'style': 'form', 'explode': True }})
    label_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label__ie', 'style': 'form', 'explode': True }})
    label_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label__iew', 'style': 'form', 'explode': True }})
    label_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label__isw', 'style': 'form', 'explode': True }})
    label_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label__n', 'style': 'form', 'explode': True }})
    label_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label__nic', 'style': 'form', 'explode': True }})
    label_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label__nie', 'style': 'form', 'explode': True }})
    label_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label__niew', 'style': 'form', 'explode': True }})
    label_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label__nisw', 'style': 'form', 'explode': True }})
    length: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    length_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length__gt', 'style': 'form', 'explode': True }})
    length_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length__gte', 'style': 'form', 'explode': True }})
    length_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length__lt', 'style': 'form', 'explode': True }})
    length_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length__lte', 'style': 'form', 'explode': True }})
    length_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length__n', 'style': 'form', 'explode': True }})
    length_unit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length_unit', 'style': 'form', 'explode': True }})
    length_unit_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length_unit__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rack: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rack', 'style': 'form', 'explode': True }})
    rack_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rack_id', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    status_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status__n', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    type_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class DcimCablesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.Cable] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class DcimCablesListRequest:
    query_params: DcimCablesListQueryParams = field()
    

@dataclass
class DcimCablesListResponse:
    content_type: str = field()
    status_code: int = field()
    dcim_cables_list_200_application_json_object: Optional[DcimCablesList200ApplicationJSON] = field(default=None)
    

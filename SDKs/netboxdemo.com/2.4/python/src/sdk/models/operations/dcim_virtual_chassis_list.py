from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DcimVirtualChassisListQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimVirtualChassisListRequest:
    query_params: DcimVirtualChassisListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DcimVirtualChassisList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.VirtualChassis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class DcimVirtualChassisListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    dcim_virtual_chassis_list_200_application_json_object: Optional[DcimVirtualChassisList200ApplicationJSON] = field(default=None)
    

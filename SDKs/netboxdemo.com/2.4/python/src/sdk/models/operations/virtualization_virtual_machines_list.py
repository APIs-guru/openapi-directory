from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class VirtualizationVirtualMachinesListQueryParams:
    cluster: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster', 'style': 'form', 'explode': True }})
    cluster_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_group', 'style': 'form', 'explode': True }})
    cluster_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_group_id', 'style': 'form', 'explode': True }})
    cluster_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_id', 'style': 'form', 'explode': True }})
    cluster_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_type', 'style': 'form', 'explode': True }})
    cluster_type_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_type_id', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    platform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    platform_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'platform_id', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_id: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    role_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role_id', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    

@dataclass
class VirtualizationVirtualMachinesListRequest:
    query_params: VirtualizationVirtualMachinesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class VirtualizationVirtualMachinesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.VirtualMachine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class VirtualizationVirtualMachinesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtualization_virtual_machines_list_200_application_json_object: Optional[VirtualizationVirtualMachinesList200ApplicationJSON] = field(default=None)
    

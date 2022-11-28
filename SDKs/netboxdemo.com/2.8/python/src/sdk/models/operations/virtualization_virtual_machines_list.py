from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class VirtualizationVirtualMachinesListQueryParams:
    cluster: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster', 'style': 'form', 'explode': True }})
    cluster_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster__n', 'style': 'form', 'explode': True }})
    cluster_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_group', 'style': 'form', 'explode': True }})
    cluster_group_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_group__n', 'style': 'form', 'explode': True }})
    cluster_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_group_id', 'style': 'form', 'explode': True }})
    cluster_group_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_group_id__n', 'style': 'form', 'explode': True }})
    cluster_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_id', 'style': 'form', 'explode': True }})
    cluster_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_id__n', 'style': 'form', 'explode': True }})
    cluster_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_type', 'style': 'form', 'explode': True }})
    cluster_type_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_type__n', 'style': 'form', 'explode': True }})
    cluster_type_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_type_id', 'style': 'form', 'explode': True }})
    cluster_type_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cluster_type_id__n', 'style': 'form', 'explode': True }})
    created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    created_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__gte', 'style': 'form', 'explode': True }})
    created_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__lte', 'style': 'form', 'explode': True }})
    disk: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disk', 'style': 'form', 'explode': True }})
    disk_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disk__gt', 'style': 'form', 'explode': True }})
    disk_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disk__gte', 'style': 'form', 'explode': True }})
    disk_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disk__lt', 'style': 'form', 'explode': True }})
    disk_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disk__lte', 'style': 'form', 'explode': True }})
    disk_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'disk__n', 'style': 'form', 'explode': True }})
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
    local_context_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'local_context_data', 'style': 'form', 'explode': True }})
    mac_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address', 'style': 'form', 'explode': True }})
    mac_address_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__ic', 'style': 'form', 'explode': True }})
    mac_address_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__ie', 'style': 'form', 'explode': True }})
    mac_address_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__iew', 'style': 'form', 'explode': True }})
    mac_address_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__isw', 'style': 'form', 'explode': True }})
    mac_address_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__n', 'style': 'form', 'explode': True }})
    mac_address_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__nic', 'style': 'form', 'explode': True }})
    mac_address_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__nie', 'style': 'form', 'explode': True }})
    mac_address_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__niew', 'style': 'form', 'explode': True }})
    mac_address_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__nisw', 'style': 'form', 'explode': True }})
    memory: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'memory', 'style': 'form', 'explode': True }})
    memory_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'memory__gt', 'style': 'form', 'explode': True }})
    memory_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'memory__gte', 'style': 'form', 'explode': True }})
    memory_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'memory__lt', 'style': 'form', 'explode': True }})
    memory_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'memory__lte', 'style': 'form', 'explode': True }})
    memory_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'memory__n', 'style': 'form', 'explode': True }})
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
    platform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    platform_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'platform__n', 'style': 'form', 'explode': True }})
    platform_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'platform_id', 'style': 'form', 'explode': True }})
    platform_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'platform_id__n', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region__n', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    region_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region_id__n', 'style': 'form', 'explode': True }})
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    role_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role__n', 'style': 'form', 'explode': True }})
    role_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role_id', 'style': 'form', 'explode': True }})
    role_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role_id__n', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site__n', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    site_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id__n', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    status_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status__n', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant__n', 'style': 'form', 'explode': True }})
    tenant_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_group', 'style': 'form', 'explode': True }})
    tenant_group_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_group__n', 'style': 'form', 'explode': True }})
    tenant_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_group_id', 'style': 'form', 'explode': True }})
    tenant_group_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_group_id__n', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    tenant_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id__n', 'style': 'form', 'explode': True }})
    vcpus: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vcpus', 'style': 'form', 'explode': True }})
    vcpus_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vcpus__gt', 'style': 'form', 'explode': True }})
    vcpus_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vcpus__gte', 'style': 'form', 'explode': True }})
    vcpus_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vcpus__lt', 'style': 'form', 'explode': True }})
    vcpus_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vcpus__lte', 'style': 'form', 'explode': True }})
    vcpus_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vcpus__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class VirtualizationVirtualMachinesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.VirtualMachineWithConfigContext] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class VirtualizationVirtualMachinesListRequest:
    query_params: VirtualizationVirtualMachinesListQueryParams = field()
    

@dataclass
class VirtualizationVirtualMachinesListResponse:
    content_type: str = field()
    status_code: int = field()
    virtualization_virtual_machines_list_200_application_json_object: Optional[VirtualizationVirtualMachinesList200ApplicationJSON] = field(default=None)
    

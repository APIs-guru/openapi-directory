from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class GetOrganizationInventoryDevicesPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationInventoryDevicesUsedStateEnum(str, Enum):
    USED = "used"
    UNUSED = "unused"


@dataclass
class GetOrganizationInventoryDevicesQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    used_state: Optional[GetOrganizationInventoryDevicesUsedStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'usedState', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationInventoryDevicesRequest:
    path_params: GetOrganizationInventoryDevicesPathParams = field(default=None)
    query_params: GetOrganizationInventoryDevicesQueryParams = field(default=None)
    

@dataclass
class GetOrganizationInventoryDevicesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_organization_inventory_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationInventoryDevicePathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationInventoryDeviceRequest:
    path_params: GetOrganizationInventoryDevicePathParams = field(default=None)
    

@dataclass
class GetOrganizationInventoryDeviceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_inventory_device_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

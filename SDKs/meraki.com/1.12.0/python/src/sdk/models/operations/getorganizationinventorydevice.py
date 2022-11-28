from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationInventoryDevicePathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationInventoryDeviceRequest:
    path_params: GetOrganizationInventoryDevicePathParams = field()
    

@dataclass
class GetOrganizationInventoryDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_inventory_device_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

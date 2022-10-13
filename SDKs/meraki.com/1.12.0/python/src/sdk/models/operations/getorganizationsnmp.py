from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSnmpPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSnmpRequest:
    path_params: GetOrganizationSnmpPathParams = field(default=None)
    

@dataclass
class GetOrganizationSnmpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_organization_snmp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

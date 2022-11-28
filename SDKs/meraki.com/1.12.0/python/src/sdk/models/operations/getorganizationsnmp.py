from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationSnmpPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationSnmpRequest:
    path_params: GetOrganizationSnmpPathParams = field()
    

@dataclass
class GetOrganizationSnmpResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_snmp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

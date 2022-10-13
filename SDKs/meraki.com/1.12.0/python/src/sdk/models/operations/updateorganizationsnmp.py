from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationSnmpPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationSnmpRequestBodyV3AuthModeEnum(str, Enum):
    MD5 = "MD5"
    SHA = "SHA"

class UpdateOrganizationSnmpRequestBodyV3PrivModeEnum(str, Enum):
    DES = "DES"
    AES128 = "AES128"


@dataclass_json
@dataclass
class UpdateOrganizationSnmpRequestBody:
    peer_ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peerIps' }})
    v2c_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v2cEnabled' }})
    v3_auth_mode: Optional[UpdateOrganizationSnmpRequestBodyV3AuthModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v3AuthMode' }})
    v3_auth_pass: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v3AuthPass' }})
    v3_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v3Enabled' }})
    v3_priv_mode: Optional[UpdateOrganizationSnmpRequestBodyV3PrivModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v3PrivMode' }})
    v3_priv_pass: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'v3PrivPass' }})
    

@dataclass
class UpdateOrganizationSnmpRequest:
    path_params: UpdateOrganizationSnmpPathParams = field(default=None)
    request: Optional[UpdateOrganizationSnmpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationSnmpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_snmp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

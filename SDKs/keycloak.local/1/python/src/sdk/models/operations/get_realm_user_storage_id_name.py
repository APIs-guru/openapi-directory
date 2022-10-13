from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRealmUserStorageIDNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUserStorageIDNameRequest:
    path_params: GetRealmUserStorageIDNamePathParams = field(default=None)
    

@dataclass
class GetRealmUserStorageIDNameResponse:
    content_type: str = field(default=None)
    get_realm_user_storage_id_name_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRealmUserStorageIDNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUserStorageIDNameRequest:
    path_params: GetRealmUserStorageIDNamePathParams = field()
    

@dataclass
class GetRealmUserStorageIDNameResponse:
    content_type: str = field()
    status_code: int = field()
    get_realm_user_storage_id_name_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    

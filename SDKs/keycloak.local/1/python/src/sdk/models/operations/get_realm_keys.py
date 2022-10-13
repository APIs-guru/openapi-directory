from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmKeysPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmKeysRequest:
    path_params: GetRealmKeysPathParams = field(default=None)
    

@dataclass
class GetRealmKeysResponse:
    content_type: str = field(default=None)
    keys_metadata_representation: Optional[shared.KeysMetadataRepresentation] = field(default=None)
    status_code: int = field(default=None)
    

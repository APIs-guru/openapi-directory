from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmKeysPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmKeysRequest:
    path_params: GetRealmKeysPathParams = field()
    

@dataclass
class GetRealmKeysResponse:
    content_type: str = field()
    status_code: int = field()
    keys_metadata_representation: Optional[shared.KeysMetadataRepresentation] = field(default=None)
    

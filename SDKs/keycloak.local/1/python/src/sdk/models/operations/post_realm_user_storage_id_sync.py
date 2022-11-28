from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmUserStorageIDSyncPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUserStorageIDSyncQueryParams:
    action: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRealmUserStorageIDSyncRequest:
    path_params: PostRealmUserStorageIDSyncPathParams = field()
    query_params: PostRealmUserStorageIDSyncQueryParams = field()
    

@dataclass
class PostRealmUserStorageIDSyncResponse:
    content_type: str = field()
    status_code: int = field()
    synchronization_result: Optional[shared.SynchronizationResult] = field(default=None)
    

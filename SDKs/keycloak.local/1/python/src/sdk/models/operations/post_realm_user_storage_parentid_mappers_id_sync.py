from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmUserStorageParentIDMappersIDSyncPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    parent_id: str = field(metadata={'path_param': { 'field_name': 'parentId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUserStorageParentIDMappersIDSyncQueryParams:
    direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRealmUserStorageParentIDMappersIDSyncRequest:
    path_params: PostRealmUserStorageParentIDMappersIDSyncPathParams = field()
    query_params: PostRealmUserStorageParentIDMappersIDSyncQueryParams = field()
    

@dataclass
class PostRealmUserStorageParentIDMappersIDSyncResponse:
    content_type: str = field()
    status_code: int = field()
    synchronization_result: Optional[shared.SynchronizationResult] = field(default=None)
    

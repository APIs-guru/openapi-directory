from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmUserStorageParentIDMappersIDSyncPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    parent_id: str = field(default=None, metadata={'path_param': { 'field_name': 'parentId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUserStorageParentIDMappersIDSyncQueryParams:
    direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRealmUserStorageParentIDMappersIDSyncRequest:
    path_params: PostRealmUserStorageParentIDMappersIDSyncPathParams = field(default=None)
    query_params: PostRealmUserStorageParentIDMappersIDSyncQueryParams = field(default=None)
    

@dataclass
class PostRealmUserStorageParentIDMappersIDSyncResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    synchronization_result: Optional[shared.SynchronizationResult] = field(default=None)
    

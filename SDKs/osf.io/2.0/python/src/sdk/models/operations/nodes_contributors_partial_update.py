from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class NodesContributorsPartialUpdatePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class NodesContributorsPartialUpdateRequestBodyAttributesAttributes:
    bibliographic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bibliographic' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    permission: Optional[NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    unregistered_contributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unregistered_contributor' }})
    

@dataclass_json
@dataclass
class NodesContributorsPartialUpdateRequestBodyLinksLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class NodesContributorsPartialUpdateRequestBodyRelationshipsRelationships:
    node: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node' }})
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class NodesContributorsPartialUpdateRequestBodyContributor:
    attributes: Optional[NodesContributorsPartialUpdateRequestBodyAttributesAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[NodesContributorsPartialUpdateRequestBodyLinksLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: NodesContributorsPartialUpdateRequestBodyRelationshipsRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NodesContributorsPartialUpdateRequest:
    path_params: NodesContributorsPartialUpdatePathParams = field(default=None)
    request: NodesContributorsPartialUpdateRequestBodyContributor = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesContributorsPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

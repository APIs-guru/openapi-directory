from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class NodesContributorsCreatePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    
class NodesContributorsCreateContributorAttributesPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class NodesContributorsCreateContributorAttributes:
    bibliographic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bibliographic' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    permission: Optional[NodesContributorsCreateContributorAttributesPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    unregistered_contributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unregistered_contributor' }})
    

@dataclass_json
@dataclass
class NodesContributorsCreateContributorLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class NodesContributorsCreateContributorRelationships:
    node: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node' }})
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class NodesContributorsCreateContributor:
    attributes: Optional[NodesContributorsCreateContributorAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[NodesContributorsCreateContributorLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: NodesContributorsCreateContributorRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NodesContributorsCreateRequest:
    path_params: NodesContributorsCreatePathParams = field(default=None)
    request: NodesContributorsCreateContributor = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesContributorsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

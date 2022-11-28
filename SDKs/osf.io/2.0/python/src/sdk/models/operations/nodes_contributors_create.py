from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class NodesContributorsCreatePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    
class NodesContributorsCreateContributorAttributesPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class NodesContributorsCreateContributorAttributesInput:
    r"""NodesContributorsCreateContributorAttributesInput
    The properties of the contributor entity.
    """
    
    bibliographic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bibliographic') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    permission: Optional[NodesContributorsCreateContributorAttributesPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass_json
@dataclass
class NodesContributorsCreateContributorRelationshipsInput:
    r"""NodesContributorsCreateContributorRelationshipsInput
    URLs to other entities or entity collections that have a relationship to the contributor entity.
    """
    
    user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclass
class NodesContributorsCreateContributorInput:
    relationships: NodesContributorsCreateContributorRelationshipsInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    attributes: Optional[NodesContributorsCreateContributorAttributesInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclass
class NodesContributorsCreateRequest:
    path_params: NodesContributorsCreatePathParams = field()
    request: NodesContributorsCreateContributorInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesContributorsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    

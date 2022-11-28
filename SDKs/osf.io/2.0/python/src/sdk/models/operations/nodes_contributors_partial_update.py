from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class NodesContributorsPartialUpdatePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class NodesContributorsPartialUpdateContributorAttributesPermissionEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


@dataclass_json
@dataclass
class NodesContributorsPartialUpdateContributorAttributesInput:
    r"""NodesContributorsPartialUpdateContributorAttributesInput
    The properties of the contributor entity.
    """
    
    bibliographic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bibliographic') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    permission: Optional[NodesContributorsPartialUpdateContributorAttributesPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclass_json
@dataclass
class NodesContributorsPartialUpdateContributorRelationshipsInput:
    r"""NodesContributorsPartialUpdateContributorRelationshipsInput
    URLs to other entities or entity collections that have a relationship to the contributor entity.
    """
    
    user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclass
class NodesContributorsPartialUpdateContributorInput:
    relationships: NodesContributorsPartialUpdateContributorRelationshipsInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    attributes: Optional[NodesContributorsPartialUpdateContributorAttributesInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclass
class NodesContributorsPartialUpdateRequest:
    path_params: NodesContributorsPartialUpdatePathParams = field()
    request: NodesContributorsPartialUpdateContributorInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesContributorsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    

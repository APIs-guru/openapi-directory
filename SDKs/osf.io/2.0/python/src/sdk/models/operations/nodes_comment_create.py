from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class NodesCommentCreatePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class NodesCommentCreateCommentAttributesInput:
    r"""NodesCommentCreateCommentAttributesInput
    The properties of the comment entity.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass_json
@dataclass
class NodesCommentCreateCommentInput:
    attributes: Optional[NodesCommentCreateCommentAttributesInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    

@dataclass
class NodesCommentCreateRequest:
    path_params: NodesCommentCreatePathParams = field()
    request: NodesCommentCreateCommentInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesCommentCreateResponse:
    content_type: str = field()
    status_code: int = field()
    

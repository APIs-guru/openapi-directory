from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class NodesChildrenCreatePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    
class NodesChildrenCreateNodeAttributesCategoryEnum(str, Enum):
    ANALYSIS = "analysis"
    COMMUNICATION = "communication"
    DATA = "data"
    HYPOTHESIS = "hypothesis"
    INSTRUMENTATION = "instrumentation"
    METHODS_AND_MEASURES = "methods and measures"
    PROCEDURE = "procedure"
    PROJECT = "project"
    SOFTWARE = "software"
    OTHER = "other"


@dataclass_json
@dataclass
class NodesChildrenCreateNodeAttributesInput:
    r"""NodesChildrenCreateNodeAttributesInput
    The properties of the node entity.
    """
    
    category: NodesChildrenCreateNodeAttributesCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    node_license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_license') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    template_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_from') }})
    

@dataclass_json
@dataclass
class NodesChildrenCreateNodeInput:
    attributes: NodesChildrenCreateNodeAttributesInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class NodesChildrenCreateRequest:
    path_params: NodesChildrenCreatePathParams = field()
    request: NodesChildrenCreateNodeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesChildrenCreateResponse:
    content_type: str = field()
    status_code: int = field()
    

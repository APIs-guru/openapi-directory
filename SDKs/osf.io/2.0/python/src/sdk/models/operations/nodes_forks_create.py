from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class NodesForksCreatePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    
class NodesForksCreateNodeAttributesCategoryEnum(str, Enum):
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
class NodesForksCreateNodeAttributesInput:
    r"""NodesForksCreateNodeAttributesInput
    The properties of the node entity.
    """
    
    category: NodesForksCreateNodeAttributesCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    node_license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_license') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    template_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_from') }})
    

@dataclass_json
@dataclass
class NodesForksCreateNodeInput:
    attributes: NodesForksCreateNodeAttributesInput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class NodesForksCreateRequest:
    path_params: NodesForksCreatePathParams = field()
    request: NodesForksCreateNodeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesForksCreateResponse:
    content_type: str = field()
    status_code: int = field()
    

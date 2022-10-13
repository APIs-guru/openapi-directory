from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import singlefielddependency
from . import conditionalsinglefielddependency
from . import inputfielddefinition
from . import actionlabels
from . import objectrequestoptions


@dataclass_json
@dataclass
class ExtensionActionDefinitionPatch:
    action_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionUrl' }})
    input_field_dependencies: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputFieldDependencies' }})
    input_fields: Optional[List[inputfielddefinition.InputFieldDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputFields' }})
    labels: Optional[dict[str, actionlabels.ActionLabels]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    object_request_options: Optional[objectrequestoptions.ObjectRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectRequestOptions' }})
    object_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTypes' }})
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    

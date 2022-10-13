from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import actionfunctionidentifier
from . import singlefielddependency
from . import conditionalsinglefielddependency
from . import inputfielddefinition
from . import actionlabels
from . import objectrequestoptions


@dataclass_json
@dataclass
class ExtensionActionDefinition:
    action_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionUrl' }})
    archived_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archivedAt' }})
    functions: List[actionfunctionidentifier.ActionFunctionIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functions' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    input_field_dependencies: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputFieldDependencies' }})
    input_fields: List[inputfielddefinition.InputFieldDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputFields' }})
    labels: dict[str, actionlabels.ActionLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    object_request_options: Optional[objectrequestoptions.ObjectRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectRequestOptions' }})
    object_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTypes' }})
    published: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published' }})
    revision_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    

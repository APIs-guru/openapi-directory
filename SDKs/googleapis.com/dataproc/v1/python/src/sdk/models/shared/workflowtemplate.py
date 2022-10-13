from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderedjob
from . import templateparameter
from . import workflowtemplateplacement


@dataclass_json
@dataclass
class WorkflowTemplate:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    dag_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dagTimeout' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    jobs: Optional[List[orderedjob.OrderedJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: Optional[List[templateparameter.TemplateParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    placement: Optional[workflowtemplateplacement.WorkflowTemplatePlacement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placement' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

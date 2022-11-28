from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ManagedGroupConfig:
    r"""ManagedGroupConfig
    Specifies the resources used to actively manage an instance group.
    """
    
    instance_group_manager_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceGroupManagerName') }})
    instance_template_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTemplateName') }})
    

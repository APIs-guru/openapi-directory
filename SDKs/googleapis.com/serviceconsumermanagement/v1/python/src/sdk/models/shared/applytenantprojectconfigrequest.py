from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplyTenantProjectConfigRequest:
    r"""ApplyTenantProjectConfigRequest
    Request to apply configuration to an existing tenant project.
    """
    
    project_config: Optional[TenantProjectConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectConfig') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

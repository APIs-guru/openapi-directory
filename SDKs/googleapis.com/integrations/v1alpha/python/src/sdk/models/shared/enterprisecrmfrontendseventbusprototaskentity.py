from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum(str, Enum):
    TASK = "TASK"
    ASIS_TEMPLATE = "ASIS_TEMPLATE"
    IO_TEMPLATE = "IO_TEMPLATE"


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoTaskEntity:
    r"""EnterpriseCrmFrontendsEventbusProtoTaskEntity
    Contains a task's metadata and associated information. Next available id: 7
    """
    
    disabled_for_vpc_sc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledForVpcSc') }})
    metadata: Optional[EnterpriseCrmEventbusProtoTaskMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    param_specs: Optional[EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paramSpecs') }})
    stats: Optional[EnterpriseCrmEventbusStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    task_type: Optional[EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskType') }})
    ui_config: Optional[EnterpriseCrmEventbusProtoTaskUIConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uiConfig') }})
    

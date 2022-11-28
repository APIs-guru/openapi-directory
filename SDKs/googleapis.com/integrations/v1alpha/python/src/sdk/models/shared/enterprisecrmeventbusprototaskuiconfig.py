from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTaskUIConfig:
    r"""EnterpriseCrmEventbusProtoTaskUIConfig
    Task authors would use this type to configure the UI for a particular task by specifying what UI config modules should be included to compose the UI. Learn more about config module framework: go/integration-platform-config-module-framework
    """
    
    task_ui_module_configs: Optional[List[EnterpriseCrmEventbusProtoTaskUIModuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskUiModuleConfigs') }})
    

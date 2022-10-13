from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprototaskuimoduleconfig


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTaskUIConfig:
    task_ui_module_configs: Optional[List[enterprisecrmeventbusprototaskuimoduleconfig.EnterpriseCrmEventbusProtoTaskUIModuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskUiModuleConfigs' }})
    

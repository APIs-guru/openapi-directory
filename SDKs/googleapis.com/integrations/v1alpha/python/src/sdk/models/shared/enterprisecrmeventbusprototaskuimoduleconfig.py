from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum(str, Enum):
    UNSPECIFIED_TASK_MODULE = "UNSPECIFIED_TASK_MODULE"
    LABEL = "LABEL"
    ERROR_HANDLING = "ERROR_HANDLING"
    TASK_PARAM_TABLE = "TASK_PARAM_TABLE"
    TASK_PARAM_FORM = "TASK_PARAM_FORM"
    PRECONDITION = "PRECONDITION"
    SCRIPT_EDITOR = "SCRIPT_EDITOR"
    RPC = "RPC"
    TASK_SUMMARY = "TASK_SUMMARY"
    SUSPENSION = "SUSPENSION"
    RPC_TYPED = "RPC_TYPED"
    SUB_WORKFLOW = "SUB_WORKFLOW"
    APPS_SCRIPT_NAVIGATOR = "APPS_SCRIPT_NAVIGATOR"
    SUB_WORKFLOW_FOR_EACH_LOOP = "SUB_WORKFLOW_FOR_EACH_LOOP"
    FIELD_MAPPING = "FIELD_MAPPING"
    README = "README"
    REST_CALLER = "REST_CALLER"
    SUB_WORKFLOW_SCATTER_GATHER = "SUB_WORKFLOW_SCATTER_GATHER"
    CLOUD_SQL = "CLOUD_SQL"
    GENERIC_CONNECTOR_TASK = "GENERIC_CONNECTOR_TASK"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoTaskUIModuleConfig:
    r"""EnterpriseCrmEventbusProtoTaskUIModuleConfig
    Task author would use this type to configure a config module.
    """
    
    module_id: Optional[EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moduleId') }})
    

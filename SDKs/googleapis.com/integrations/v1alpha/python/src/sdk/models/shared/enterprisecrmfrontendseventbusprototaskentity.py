from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprototaskmetadata
from . import enterprisecrmfrontendseventbusprotoparamspecsmessage
from . import enterprisecrmeventbusstats
from . import enterprisecrmeventbusprototaskuiconfig

class EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum(str, Enum):
    TASK = "TASK"
    ASIS_TEMPLATE = "ASIS_TEMPLATE"
    IO_TEMPLATE = "IO_TEMPLATE"


@dataclass_json
@dataclass
class EnterpriseCrmFrontendsEventbusProtoTaskEntity:
    disabled_for_vpc_sc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledForVpcSc' }})
    metadata: Optional[enterprisecrmeventbusprototaskmetadata.EnterpriseCrmEventbusProtoTaskMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    param_specs: Optional[enterprisecrmfrontendseventbusprotoparamspecsmessage.EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paramSpecs' }})
    stats: Optional[enterprisecrmeventbusstats.EnterpriseCrmEventbusStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    task_type: Optional[EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskType' }})
    ui_config: Optional[enterprisecrmeventbusprototaskuiconfig.EnterpriseCrmEventbusProtoTaskUIConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uiConfig' }})
    

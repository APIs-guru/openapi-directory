from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RuntimeAccessConfigAccessTypeEnum(str, Enum):
    RUNTIME_ACCESS_TYPE_UNSPECIFIED = "RUNTIME_ACCESS_TYPE_UNSPECIFIED"
    SINGLE_USER = "SINGLE_USER"
    SERVICE_ACCOUNT = "SERVICE_ACCOUNT"


@dataclass_json
@dataclass
class RuntimeAccessConfigInput:
    r"""RuntimeAccessConfigInput
    Specifies the login configuration for Runtime
    """
    
    access_type: Optional[RuntimeAccessConfigAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessType') }})
    runtime_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeOwner') }})
    

@dataclass_json
@dataclass
class RuntimeAccessConfig:
    r"""RuntimeAccessConfig
    Specifies the login configuration for Runtime
    """
    
    access_type: Optional[RuntimeAccessConfigAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessType') }})
    proxy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxyUri') }})
    runtime_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeOwner') }})
    

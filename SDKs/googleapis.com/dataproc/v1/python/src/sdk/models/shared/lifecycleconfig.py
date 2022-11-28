from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LifecycleConfig:
    r"""LifecycleConfig
    Specifies the cluster auto-delete schedule configuration.
    """
    
    auto_delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoDeleteTime') }})
    auto_delete_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoDeleteTtl') }})
    idle_delete_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleDeleteTtl') }})
    idle_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleStartTime') }})
    

@dataclass_json
@dataclass
class LifecycleConfigInput:
    r"""LifecycleConfigInput
    Specifies the cluster auto-delete schedule configuration.
    """
    
    auto_delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoDeleteTime') }})
    auto_delete_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoDeleteTtl') }})
    idle_delete_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idleDeleteTtl') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrimaryInstanceSettings:
    r"""PrimaryInstanceSettings
    Settings for the cluster's primary instance
    """
    
    database_flags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseFlags') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_config: Optional[MachineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineConfig') }})
    private_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateIp') }})
    

@dataclass_json
@dataclass
class PrimaryInstanceSettingsInput:
    r"""PrimaryInstanceSettingsInput
    Settings for the cluster's primary instance
    """
    
    database_flags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseFlags') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    machine_config: Optional[MachineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineConfig') }})
    

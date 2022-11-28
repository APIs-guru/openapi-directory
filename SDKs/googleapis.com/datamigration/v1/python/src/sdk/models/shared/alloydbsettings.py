from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlloyDbSettings:
    r"""AlloyDbSettings
    Settings for creating an AlloyDB cluster.
    """
    
    initial_user: Optional[UserPassword] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialUser') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    primary_instance_settings: Optional[PrimaryInstanceSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryInstanceSettings') }})
    vpc_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcNetwork') }})
    

@dataclass_json
@dataclass
class AlloyDbSettingsInput:
    r"""AlloyDbSettingsInput
    Settings for creating an AlloyDB cluster.
    """
    
    initial_user: Optional[UserPasswordInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialUser') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    primary_instance_settings: Optional[PrimaryInstanceSettingsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryInstanceSettings') }})
    vpc_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcNetwork') }})
    

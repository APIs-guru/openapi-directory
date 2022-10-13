from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userpassword
from . import primaryinstancesettings


@dataclass_json
@dataclass
class AlloyDbSettings:
    initial_user: Optional[userpassword.UserPassword] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialUser' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    primary_instance_settings: Optional[primaryinstancesettings.PrimaryInstanceSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryInstanceSettings' }})
    vpc_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcNetwork' }})
    

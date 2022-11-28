from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ManagedLinodeSettingsSSH:
    r"""ManagedLinodeSettingsSSH
    The SSH settings for this Linode.
    
    """
    
    access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclass
class ManagedLinodeSettingsInput:
    r"""ManagedLinodeSettingsInput
    Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
    
    """
    
    ssh: Optional[ManagedLinodeSettingsSSH] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh') }})
    

@dataclass_json
@dataclass
class ManagedLinodeSettings:
    r"""ManagedLinodeSettings
    Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
    
    """
    
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    ssh: Optional[ManagedLinodeSettingsSSH] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssh') }})
    

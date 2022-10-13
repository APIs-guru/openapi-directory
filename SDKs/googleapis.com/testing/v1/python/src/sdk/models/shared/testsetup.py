from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import account
from . import apk
from . import environmentvariable
from . import devicefile
from . import systracesetup


@dataclass_json
@dataclass
class TestSetup:
    account: Optional[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    additional_apks: Optional[List[apk.Apk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalApks' }})
    directories_to_pull: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directoriesToPull' }})
    dont_autogrant_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dontAutograntPermissions' }})
    environment_variables: Optional[List[environmentvariable.EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    files_to_push: Optional[List[devicefile.DeviceFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesToPush' }})
    network_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkProfile' }})
    systrace: Optional[systracesetup.SystraceSetup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systrace' }})
    

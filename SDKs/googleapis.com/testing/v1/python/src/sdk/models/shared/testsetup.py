from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestSetup:
    r"""TestSetup
    A description of how to set up the Android device prior to running the test.
    """
    
    account: Optional[Account] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    additional_apks: Optional[List[Apk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalApks') }})
    directories_to_pull: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directoriesToPull') }})
    dont_autogrant_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dontAutograntPermissions') }})
    environment_variables: Optional[List[EnvironmentVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    files_to_push: Optional[List[DeviceFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesToPush') }})
    network_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfile') }})
    systrace: Optional[SystraceSetup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systrace') }})
    

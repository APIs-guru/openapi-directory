from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IosTestSetup:
    r"""IosTestSetup
    A description of how to set up an iOS device prior to running the test.
    """
    
    additional_ipas: Optional[List[FileReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalIpas') }})
    network_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkProfile') }})
    pull_directories: Optional[List[IosDeviceFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullDirectories') }})
    push_files: Optional[List[IosDeviceFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushFiles') }})
    

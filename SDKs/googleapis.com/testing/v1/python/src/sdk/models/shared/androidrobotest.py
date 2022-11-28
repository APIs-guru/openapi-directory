from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AndroidRoboTestRoboModeEnum(str, Enum):
    ROBO_MODE_UNSPECIFIED = "ROBO_MODE_UNSPECIFIED"
    ROBO_VERSION_1 = "ROBO_VERSION_1"
    ROBO_VERSION_2 = "ROBO_VERSION_2"


@dataclass_json
@dataclass
class AndroidRoboTest:
    r"""AndroidRoboTest
    A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.
    """
    
    app_apk: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appApk') }})
    app_bundle: Optional[AppBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appBundle') }})
    app_initial_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appInitialActivity') }})
    app_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPackageId') }})
    max_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDepth') }})
    max_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSteps') }})
    robo_directives: Optional[List[RoboDirective]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roboDirectives') }})
    robo_mode: Optional[AndroidRoboTestRoboModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roboMode') }})
    robo_script: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roboScript') }})
    starting_intents: Optional[List[RoboStartingIntent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startingIntents') }})
    

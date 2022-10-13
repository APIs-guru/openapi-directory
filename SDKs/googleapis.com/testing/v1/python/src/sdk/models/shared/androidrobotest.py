from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filereference
from . import appbundle
from . import robodirective
from . import filereference
from . import robostartingintent

class AndroidRoboTestRoboModeEnum(str, Enum):
    ROBO_MODE_UNSPECIFIED = "ROBO_MODE_UNSPECIFIED"
    ROBO_VERSION_1 = "ROBO_VERSION_1"
    ROBO_VERSION_2 = "ROBO_VERSION_2"


@dataclass_json
@dataclass
class AndroidRoboTest:
    app_apk: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appApk' }})
    app_bundle: Optional[appbundle.AppBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appBundle' }})
    app_initial_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appInitialActivity' }})
    app_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPackageId' }})
    max_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDepth' }})
    max_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSteps' }})
    robo_directives: Optional[List[robodirective.RoboDirective]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roboDirectives' }})
    robo_mode: Optional[AndroidRoboTestRoboModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roboMode' }})
    robo_script: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roboScript' }})
    starting_intents: Optional[List[robostartingintent.RoboStartingIntent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startingIntents' }})
    

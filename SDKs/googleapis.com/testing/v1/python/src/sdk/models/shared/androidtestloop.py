from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AndroidTestLoop:
    r"""AndroidTestLoop
    A test of an Android Application with a Test Loop. The intent \ will be implicitly added, since Games is the only user of this api, for the time being.
    """
    
    app_apk: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appApk') }})
    app_bundle: Optional[AppBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appBundle') }})
    app_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appPackageId') }})
    scenario_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarioLabels') }})
    scenarios: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarios') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filereference
from . import appbundle


@dataclass_json
@dataclass
class AndroidTestLoop:
    app_apk: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appApk' }})
    app_bundle: Optional[appbundle.AppBundle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appBundle' }})
    app_package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appPackageId' }})
    scenario_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scenarioLabels' }})
    scenarios: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scenarios' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import upgradedistribution
from . import version
from . import windowsupdate


@dataclass_json
@dataclass
class UpgradeNote:
    distributions: Optional[List[upgradedistribution.UpgradeDistribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributions' }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    windows_update: Optional[windowsupdate.WindowsUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsUpdate' }})
    

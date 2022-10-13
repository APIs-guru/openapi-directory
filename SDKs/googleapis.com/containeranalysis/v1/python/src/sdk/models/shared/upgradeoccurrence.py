from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import upgradedistribution
from . import version
from . import windowsupdate


@dataclass_json
@dataclass
class UpgradeOccurrence:
    distribution: Optional[upgradedistribution.UpgradeDistribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'package' }})
    parsed_version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parsedVersion' }})
    windows_update: Optional[windowsupdate.WindowsUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsUpdate' }})
    

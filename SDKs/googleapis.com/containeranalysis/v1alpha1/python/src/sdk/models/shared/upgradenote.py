from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpgradeNote:
    r"""UpgradeNote
    An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be a Upgrade Note.
    """
    
    distributions: Optional[List[UpgradeDistribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributions') }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

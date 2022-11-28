from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpgradeNote:
    r"""UpgradeNote
    An Upgrade Note represents a potential upgrade of a package to a given version. For each package version combination (i.e. bash 4.0, bash 4.1, bash 4.1.2), there will be an Upgrade Note. For Windows, windows_update field represents the information related to the update.
    """
    
    distributions: Optional[List[UpgradeDistribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributions') }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    windows_update: Optional[WindowsUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsUpdate') }})
    

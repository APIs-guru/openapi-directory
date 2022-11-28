from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpgradeOccurrence:
    r"""UpgradeOccurrence
    An Upgrade Occurrence represents that a specific resource_url could install a specific upgrade. This presence is supplied via local sources (i.e. it is present in the mirror and the running system has noticed its availability). For Windows, both distribution and windows_update contain information for the Windows update.
    """
    
    distribution: Optional[UpgradeDistribution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    parsed_version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parsedVersion') }})
    windows_update: Optional[WindowsUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsUpdate') }})
    

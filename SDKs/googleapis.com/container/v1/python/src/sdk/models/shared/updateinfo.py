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
class UpdateInfo:
    r"""UpdateInfo
    UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade.
    """
    
    blue_green_info: Optional[BlueGreenInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueGreenInfo') }})
    

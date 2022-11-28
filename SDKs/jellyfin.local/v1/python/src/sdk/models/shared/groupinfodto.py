from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GroupInfoDto:
    r"""GroupInfoDto
    Class GroupInfoDto.
    """
    
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    participants: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Participants') }})
    state: Optional[GroupStateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

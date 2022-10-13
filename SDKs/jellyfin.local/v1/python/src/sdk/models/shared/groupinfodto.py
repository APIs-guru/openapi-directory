from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import groupstatetype_enum


@dataclass_json
@dataclass
class GroupInfoDto:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    participants: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Participants' }})
    state: Optional[groupstatetype_enum.GroupStateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    

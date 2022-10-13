from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import house_enum


@dataclass_json
@dataclass
class AmendmentMember:
    house: Optional[house_enum.HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'house' }})
    is_lead: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLead' }})
    member_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberFrom' }})
    member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberId' }})
    member_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberPage' }})
    member_photo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberPhoto' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    party_colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partyColour' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

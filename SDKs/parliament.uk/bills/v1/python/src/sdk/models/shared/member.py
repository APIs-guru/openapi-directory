from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Member:
    house: Optional[HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('house') }})
    member_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberFrom') }})
    member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberId') }})
    member_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberPage') }})
    member_photo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberPhoto') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    party_colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partyColour') }})
    

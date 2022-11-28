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
class Candidate:
    r"""Candidate
    Information about a candidate running for elected office.
    """
    
    candidate_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidateUrl') }})
    channels: Optional[List[Channel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    order_on_ballot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderOnBallot') }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoUrl') }})
    

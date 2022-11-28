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
class VoteEvent:
    counts: List[VoteCount] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    motion_text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('motion_text') }})
    organization: Organization = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    result: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    sources: List[Link] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    votes: List[PersonVote] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('votes') }})
    motion_classification: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motion_classification') }})
    

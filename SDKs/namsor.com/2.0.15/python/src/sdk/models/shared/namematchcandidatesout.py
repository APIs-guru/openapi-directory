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
class NameMatchCandidatesOut:
    r"""NameMatchCandidatesOut
    Classified matched names
    """
    
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    match_candidates: Optional[List[NameMatchCandidateOut]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchCandidates') }})
    order_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderOption') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    

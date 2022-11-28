from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AmendmentDetail:
    amendment_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendmentId') }})
    amendment_lines: Optional[List[AmendmentLine]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendmentLines') }})
    amendment_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendmentNote') }})
    amendment_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendmentPosition') }})
    amendment_type: Optional[AmendmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amendmentType') }})
    bill_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billId') }})
    bill_stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billStageId') }})
    clause: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clause') }})
    decision: Optional[AmendmentDecisionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decision') }})
    explanatory_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanatoryText') }})
    explanatory_text_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanatoryTextPrefix') }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineNumber') }})
    marshalled_list_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marshalledListText') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    schedule: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    sponsors: Optional[List[AmendmentMember]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sponsors') }})
    

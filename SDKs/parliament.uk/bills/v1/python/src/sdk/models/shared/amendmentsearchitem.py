from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import amendmenttype_enum
from . import amendmentdecision_enum
from . import amendmentmember


@dataclass_json
@dataclass
class AmendmentSearchItem:
    amendment_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendmentId' }})
    amendment_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendmentPosition' }})
    amendment_type: Optional[amendmenttype_enum.AmendmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendmentType' }})
    bill_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billId' }})
    bill_stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billStageId' }})
    clause: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clause' }})
    decision: Optional[amendmentdecision_enum.AmendmentDecisionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decision' }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineNumber' }})
    marshalled_list_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marshalledListText' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    schedule: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    sponsors: Optional[List[amendmentmember.AmendmentMember]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsors' }})
    summary_text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaryText' }})
    

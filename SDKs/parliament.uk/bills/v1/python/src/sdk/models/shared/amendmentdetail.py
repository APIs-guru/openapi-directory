from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import amendmentline
from . import amendmenttype_enum
from . import amendmentdecision_enum
from . import amendmentmember


@dataclass_json
@dataclass
class AmendmentDetail:
    amendment_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendmentId' }})
    amendment_lines: Optional[List[amendmentline.AmendmentLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendmentLines' }})
    amendment_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendmentNote' }})
    amendment_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendmentPosition' }})
    amendment_type: Optional[amendmenttype_enum.AmendmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amendmentType' }})
    bill_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billId' }})
    bill_stage_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billStageId' }})
    clause: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clause' }})
    decision: Optional[amendmentdecision_enum.AmendmentDecisionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decision' }})
    explanatory_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explanatoryText' }})
    explanatory_text_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explanatoryTextPrefix' }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineNumber' }})
    marshalled_list_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marshalledListText' }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    schedule: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    sponsors: Optional[List[amendmentmember.AmendmentMember]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsors' }})
    

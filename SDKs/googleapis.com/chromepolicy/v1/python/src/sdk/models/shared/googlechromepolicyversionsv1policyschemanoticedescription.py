from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription:
    acknowledgement_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgementRequired' }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    notice_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noticeMessage' }})
    notice_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noticeValue' }})
    

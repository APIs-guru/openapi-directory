from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription:
    r"""GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription
    Provides special notice messages related to a particular value in a field that is part of a PolicySchema.
    """
    
    acknowledgement_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgementRequired') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    notice_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noticeMessage') }})
    notice_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noticeValue') }})
    

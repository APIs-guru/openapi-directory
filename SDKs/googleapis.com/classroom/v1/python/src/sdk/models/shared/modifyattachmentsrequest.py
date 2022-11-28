from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyAttachmentsRequest:
    r"""ModifyAttachmentsRequest
    Request to modify the attachments of a student submission.
    """
    
    add_attachments: Optional[List[Attachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addAttachments') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attachment


@dataclass_json
@dataclass
class ModifyAttachmentsRequest:
    add_attachments: Optional[List[attachment.Attachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addAttachments' }})
    

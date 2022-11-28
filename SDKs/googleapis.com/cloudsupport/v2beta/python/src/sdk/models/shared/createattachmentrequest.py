from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAttachmentRequestInput:
    r"""CreateAttachmentRequestInput
    The request message for the CreateAttachment endpoint.
    """
    
    attachment: Optional[AttachmentInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment') }})
    

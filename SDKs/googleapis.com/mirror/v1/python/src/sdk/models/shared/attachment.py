from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Attachment:
    r"""Attachment
    Represents media content, such as a photo, that can be attached to a timeline item.
    """
    
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUrl') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_processing_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProcessingContent') }})
    

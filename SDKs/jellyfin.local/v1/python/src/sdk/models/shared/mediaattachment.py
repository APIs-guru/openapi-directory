from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MediaAttachment:
    r"""MediaAttachment
    Class MediaAttachment.
    """
    
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Codec') }})
    codec_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodecTag') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comment') }})
    delivery_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryUrl') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileName') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Index') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MimeType') }})
    

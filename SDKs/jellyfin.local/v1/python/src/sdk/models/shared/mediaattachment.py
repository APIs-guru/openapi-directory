from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MediaAttachment:
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Codec' }})
    codec_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodecTag' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    delivery_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryUrl' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileName' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Index' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MimeType' }})
    

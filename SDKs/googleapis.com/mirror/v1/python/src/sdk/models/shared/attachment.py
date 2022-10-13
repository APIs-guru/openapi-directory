from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Attachment:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentUrl' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_processing_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isProcessingContent' }})
    

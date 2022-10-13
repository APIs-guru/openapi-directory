from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documenttextanchortextsegment


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentTextAnchor:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    text_segments: Optional[List[googleclouddocumentaiv1documenttextanchortextsegment.GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSegments' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documenttextanchortextsegment


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentTextAnchor:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    text_segments: Optional[List[googleclouddocumentaiv1beta2documenttextanchortextsegment.GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textSegments' }})
    

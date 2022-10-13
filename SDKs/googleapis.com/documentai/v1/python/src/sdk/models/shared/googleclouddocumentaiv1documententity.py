from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documententitynormalizedvalue
from . import googleclouddocumentaiv1documentpageanchor
from . import googleclouddocumentaiv1documententity
from . import googleclouddocumentaiv1documentprovenance
from . import googleclouddocumentaiv1documenttextanchor


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentEntity:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mention_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentionId' }})
    mention_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentionText' }})
    normalized_value: Optional[googleclouddocumentaiv1documententitynormalizedvalue.GoogleCloudDocumentaiV1DocumentEntityNormalizedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedValue' }})
    page_anchor: Optional[googleclouddocumentaiv1documentpageanchor.GoogleCloudDocumentaiV1DocumentPageAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageAnchor' }})
    properties: Optional[List[googleclouddocumentaiv1documententity.GoogleCloudDocumentaiV1DocumentEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    provenance: Optional[googleclouddocumentaiv1documentprovenance.GoogleCloudDocumentaiV1DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    redacted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redacted' }})
    text_anchor: Optional[googleclouddocumentaiv1documenttextanchor.GoogleCloudDocumentaiV1DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnchor' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

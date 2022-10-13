from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documententitynormalizedvalue
from . import googleclouddocumentaiv1beta2documentpageanchor
from . import googleclouddocumentaiv1beta2documententity
from . import googleclouddocumentaiv1beta2documentprovenance
from . import googleclouddocumentaiv1beta2documenttextanchor


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentEntity:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mention_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentionId' }})
    mention_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentionText' }})
    normalized_value: Optional[googleclouddocumentaiv1beta2documententitynormalizedvalue.GoogleCloudDocumentaiV1beta2DocumentEntityNormalizedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedValue' }})
    page_anchor: Optional[googleclouddocumentaiv1beta2documentpageanchor.GoogleCloudDocumentaiV1beta2DocumentPageAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageAnchor' }})
    properties: Optional[List[googleclouddocumentaiv1beta2documententity.GoogleCloudDocumentaiV1beta2DocumentEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    provenance: Optional[googleclouddocumentaiv1beta2documentprovenance.GoogleCloudDocumentaiV1beta2DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    redacted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redacted' }})
    text_anchor: Optional[googleclouddocumentaiv1beta2documenttextanchor.GoogleCloudDocumentaiV1beta2DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnchor' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documententitynormalizedvalue
from . import googleclouddocumentaiv1beta3documentpageanchor
from . import googleclouddocumentaiv1beta3documententity
from . import googleclouddocumentaiv1beta3documentprovenance
from . import googleclouddocumentaiv1beta3documenttextanchor


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentEntity:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mention_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentionId' }})
    mention_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mentionText' }})
    normalized_value: Optional[googleclouddocumentaiv1beta3documententitynormalizedvalue.GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedValue' }})
    page_anchor: Optional[googleclouddocumentaiv1beta3documentpageanchor.GoogleCloudDocumentaiV1beta3DocumentPageAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageAnchor' }})
    properties: Optional[List[googleclouddocumentaiv1beta3documententity.GoogleCloudDocumentaiV1beta3DocumentEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    provenance: Optional[googleclouddocumentaiv1beta3documentprovenance.GoogleCloudDocumentaiV1beta3DocumentProvenance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    redacted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redacted' }})
    text_anchor: Optional[googleclouddocumentaiv1beta3documenttextanchor.GoogleCloudDocumentaiV1beta3DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnchor' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

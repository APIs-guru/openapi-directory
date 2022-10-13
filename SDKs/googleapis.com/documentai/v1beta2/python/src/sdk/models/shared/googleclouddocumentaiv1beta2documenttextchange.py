from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documentprovenance
from . import googleclouddocumentaiv1beta2documenttextanchor


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentTextChange:
    changed_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changedText' }})
    provenance: Optional[List[googleclouddocumentaiv1beta2documentprovenance.GoogleCloudDocumentaiV1beta2DocumentProvenance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    text_anchor: Optional[googleclouddocumentaiv1beta2documenttextanchor.GoogleCloudDocumentaiV1beta2DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnchor' }})
    

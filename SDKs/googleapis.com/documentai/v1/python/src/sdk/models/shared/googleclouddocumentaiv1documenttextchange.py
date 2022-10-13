from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentprovenance
from . import googleclouddocumentaiv1documenttextanchor


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentTextChange:
    changed_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changedText' }})
    provenance: Optional[List[googleclouddocumentaiv1documentprovenance.GoogleCloudDocumentaiV1DocumentProvenance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    text_anchor: Optional[googleclouddocumentaiv1documenttextanchor.GoogleCloudDocumentaiV1DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnchor' }})
    

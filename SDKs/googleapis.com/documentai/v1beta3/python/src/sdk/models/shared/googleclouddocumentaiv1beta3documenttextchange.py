from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentprovenance
from . import googleclouddocumentaiv1beta3documenttextanchor


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentTextChange:
    changed_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changedText' }})
    provenance: Optional[List[googleclouddocumentaiv1beta3documentprovenance.GoogleCloudDocumentaiV1beta3DocumentProvenance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provenance' }})
    text_anchor: Optional[googleclouddocumentaiv1beta3documenttextanchor.GoogleCloudDocumentaiV1beta3DocumentTextAnchor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnchor' }})
    

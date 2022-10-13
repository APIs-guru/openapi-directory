from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documentpageanchorpageref


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPageAnchor:
    page_refs: Optional[List[googleclouddocumentaiv1beta2documentpageanchorpageref.GoogleCloudDocumentaiV1beta2DocumentPageAnchorPageRef]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageRefs' }})
    

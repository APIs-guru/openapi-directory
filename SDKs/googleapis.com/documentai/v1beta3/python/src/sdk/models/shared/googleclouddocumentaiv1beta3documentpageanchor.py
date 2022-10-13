from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentpageanchorpageref


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageAnchor:
    page_refs: Optional[List[googleclouddocumentaiv1beta3documentpageanchorpageref.GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageRefs' }})
    

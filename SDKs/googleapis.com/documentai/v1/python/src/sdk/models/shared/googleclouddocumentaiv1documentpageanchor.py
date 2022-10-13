from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentpageanchorpageref


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageAnchor:
    page_refs: Optional[List[googleclouddocumentaiv1documentpageanchorpageref.GoogleCloudDocumentaiV1DocumentPageAnchorPageRef]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageRefs' }})
    

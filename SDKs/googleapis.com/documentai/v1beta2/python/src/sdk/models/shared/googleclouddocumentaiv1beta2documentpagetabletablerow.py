from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2documentpagetabletablecell


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow:
    cells: Optional[List[googleclouddocumentaiv1beta2documentpagetabletablecell.GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cells' }})
    

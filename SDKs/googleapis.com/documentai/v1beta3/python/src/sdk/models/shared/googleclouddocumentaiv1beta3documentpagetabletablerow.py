from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentpagetabletablecell


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow:
    cells: Optional[List[googleclouddocumentaiv1beta3documentpagetabletablecell.GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cells' }})
    

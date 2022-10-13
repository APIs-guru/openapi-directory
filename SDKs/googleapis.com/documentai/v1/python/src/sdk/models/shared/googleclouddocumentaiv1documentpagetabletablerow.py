from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentpagetabletablecell


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageTableTableRow:
    cells: Optional[List[googleclouddocumentaiv1documentpagetabletablecell.GoogleCloudDocumentaiV1DocumentPageTableTableCell]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cells' }})
    

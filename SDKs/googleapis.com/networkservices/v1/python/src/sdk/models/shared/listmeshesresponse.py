from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mesh


@dataclass_json
@dataclass
class ListMeshesResponse:
    meshes: Optional[List[mesh.Mesh]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

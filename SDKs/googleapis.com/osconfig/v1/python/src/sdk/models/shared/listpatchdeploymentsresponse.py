from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import patchdeployment


@dataclass_json
@dataclass
class ListPatchDeploymentsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    patch_deployments: Optional[List[patchdeployment.PatchDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patchDeployments' }})
    

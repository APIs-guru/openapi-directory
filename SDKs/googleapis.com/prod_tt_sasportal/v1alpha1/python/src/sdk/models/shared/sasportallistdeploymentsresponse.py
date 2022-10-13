from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sasportaldeployment


@dataclass_json
@dataclass
class SasPortalListDeploymentsResponse:
    deployments: Optional[List[sasportaldeployment.SasPortalDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

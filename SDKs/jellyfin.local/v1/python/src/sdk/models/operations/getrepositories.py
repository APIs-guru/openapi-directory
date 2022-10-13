from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesRequest:
    security: GetRepositoriesSecurity = field(default=None)
    

@dataclass
class GetRepositoriesResponse:
    content_type: str = field(default=None)
    repository_infos: Optional[List[shared.RepositoryInfo]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesRequest:
    security: GetRepositoriesSecurity = field()
    

@dataclass
class GetRepositoriesResponse:
    content_type: str = field()
    status_code: int = field()
    repository_infos: Optional[List[shared.RepositoryInfo]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SetRepositoriesRequests:
    repository_infos: Optional[List[shared.RepositoryInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    repository_infos1: Optional[List[shared.RepositoryInfo]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    repository_infos2: Optional[List[shared.RepositoryInfo]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SetRepositoriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetRepositoriesRequest:
    security: SetRepositoriesSecurity = field()
    request: Optional[SetRepositoriesRequests] = field(default=None)
    

@dataclass
class SetRepositoriesResponse:
    content_type: str = field()
    status_code: int = field()
    

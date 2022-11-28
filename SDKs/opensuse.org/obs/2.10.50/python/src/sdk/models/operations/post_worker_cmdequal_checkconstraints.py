from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWorkerCmdEqualCheckconstraintsQueryParams:
    arch: str = field(metadata={'query_param': { 'field_name': 'arch', 'style': 'form', 'explode': True }})
    package: str = field(metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    project: str = field(metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    repository: str = field(metadata={'query_param': { 'field_name': 'repository', 'style': 'form', 'explode': True }})
    

@dataclass
class PostWorkerCmdEqualCheckconstraintsSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostWorkerCmdEqualCheckconstraintsRequest:
    query_params: PostWorkerCmdEqualCheckconstraintsQueryParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    security: PostWorkerCmdEqualCheckconstraintsSecurity = field()
    

@dataclass
class PostWorkerCmdEqualCheckconstraintsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

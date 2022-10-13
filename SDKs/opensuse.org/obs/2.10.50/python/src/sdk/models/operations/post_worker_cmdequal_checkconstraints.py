from dataclasses import dataclass, field



@dataclass
class PostWorkerCmdEqualCheckconstraintsQueryParams:
    arch: str = field(default=None, metadata={'query_param': { 'field_name': 'arch', 'style': 'form', 'explode': True }})
    package: str = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    project: str = field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    repository: str = field(default=None, metadata={'query_param': { 'field_name': 'repository', 'style': 'form', 'explode': True }})
    

@dataclass
class PostWorkerCmdEqualCheckconstraintsSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostWorkerCmdEqualCheckconstraintsRequest:
    query_params: PostWorkerCmdEqualCheckconstraintsQueryParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PostWorkerCmdEqualCheckconstraintsSecurity = field(default=None)
    

@dataclass
class PostWorkerCmdEqualCheckconstraintsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

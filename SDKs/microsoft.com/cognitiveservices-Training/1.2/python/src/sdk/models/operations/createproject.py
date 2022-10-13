from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateProjectQueryParams:
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    domain_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domainId', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateProjectHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class CreateProjectRequest:
    query_params: CreateProjectQueryParams = field(default=None)
    headers: CreateProjectHeaders = field(default=None)
    

@dataclass
class CreateProjectResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    status_code: int = field(default=None)
    

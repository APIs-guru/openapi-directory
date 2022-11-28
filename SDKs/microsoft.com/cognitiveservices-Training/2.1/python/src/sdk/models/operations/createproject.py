from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class CreateProjectClassificationTypeEnum(str, Enum):
    MULTICLASS = "Multiclass"
    MULTILABEL = "Multilabel"


@dataclass
class CreateProjectQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    classification_type: Optional[CreateProjectClassificationTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'classificationType', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    domain_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domainId', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateProjectHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProjectRequest:
    headers: CreateProjectHeaders = field()
    query_params: CreateProjectQueryParams = field()
    

@dataclass
class CreateProjectResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    project: Optional[shared.Project] = field(default=None)
    

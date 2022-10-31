from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainPathParams:
    domain_id: str = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainRequest:
    path_params: GetDomainPathParams = field(default=None)
    headers: GetDomainHeaders = field(default=None)
    

@dataclass
class GetDomainResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    domain: Optional[shared.Domain] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainPathParams:
    domain_id: str = field(metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainRequest:
    headers: GetDomainHeaders = field()
    path_params: GetDomainPathParams = field()
    

@dataclass
class GetDomainResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    domain: Optional[shared.Domain] = field(default=None)
    

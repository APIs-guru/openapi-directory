from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOntDagsUsingGetPathParams:
    acc_id: str = field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOntDagsUsingGetRequest:
    path_params: GetOntDagsUsingGetPathParams = field()
    

@dataclass
class GetOntDagsUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

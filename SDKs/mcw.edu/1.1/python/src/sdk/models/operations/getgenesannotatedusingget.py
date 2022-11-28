from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGenesAnnotatedUsingGetPathParams:
    acc_id: str = field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesAnnotatedUsingGetRequest:
    path_params: GetGenesAnnotatedUsingGetPathParams = field()
    

@dataclass
class GetGenesAnnotatedUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

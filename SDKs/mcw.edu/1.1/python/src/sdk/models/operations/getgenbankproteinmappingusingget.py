from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGenBankProteinMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenBankProteinMappingUsingGetRequest:
    path_params: GetGenBankProteinMappingUsingGetPathParams = field()
    

@dataclass
class GetGenBankProteinMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

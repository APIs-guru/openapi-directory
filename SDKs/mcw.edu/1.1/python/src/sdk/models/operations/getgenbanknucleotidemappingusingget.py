from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGenBankNucleotideMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenBankNucleotideMappingUsingGetRequest:
    path_params: GetGenBankNucleotideMappingUsingGetPathParams = field()
    

@dataclass
class GetGenBankNucleotideMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

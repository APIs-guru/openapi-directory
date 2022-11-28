from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGenesByKeywordUsingGetPathParams:
    keyword: str = field(metadata={'path_param': { 'field_name': 'keyword', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesByKeywordUsingGetRequest:
    path_params: GetGenesByKeywordUsingGetPathParams = field()
    

@dataclass
class GetGenesByKeywordUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

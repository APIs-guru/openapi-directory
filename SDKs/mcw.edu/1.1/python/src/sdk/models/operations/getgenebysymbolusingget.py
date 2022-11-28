from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGeneBySymbolUsingGetPathParams:
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    symbol: str = field(metadata={'path_param': { 'field_name': 'symbol', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneBySymbolUsingGetRequest:
    path_params: GetGeneBySymbolUsingGetPathParams = field()
    

@dataclass
class GetGeneBySymbolUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

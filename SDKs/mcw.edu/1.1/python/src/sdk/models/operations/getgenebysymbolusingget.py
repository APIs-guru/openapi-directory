from dataclasses import dataclass, field



@dataclass
class GetGeneBySymbolUsingGetPathParams:
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    symbol: str = field(default=None, metadata={'path_param': { 'field_name': 'symbol', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneBySymbolUsingGetRequest:
    path_params: GetGeneBySymbolUsingGetPathParams = field(default=None)
    

@dataclass
class GetGeneBySymbolUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGenesByAliasSymbolUsingGetPathParams:
    alias_symbol: str = field(metadata={'path_param': { 'field_name': 'aliasSymbol', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesByAliasSymbolUsingGetRequest:
    path_params: GetGenesByAliasSymbolUsingGetPathParams = field()
    

@dataclass
class GetGenesByAliasSymbolUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

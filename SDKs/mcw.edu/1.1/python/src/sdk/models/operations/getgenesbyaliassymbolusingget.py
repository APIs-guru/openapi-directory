from dataclasses import dataclass, field



@dataclass
class GetGenesByAliasSymbolUsingGetPathParams:
    alias_symbol: str = field(default=None, metadata={'path_param': { 'field_name': 'aliasSymbol', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesByAliasSymbolUsingGetRequest:
    path_params: GetGenesByAliasSymbolUsingGetPathParams = field(default=None)
    

@dataclass
class GetGenesByAliasSymbolUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

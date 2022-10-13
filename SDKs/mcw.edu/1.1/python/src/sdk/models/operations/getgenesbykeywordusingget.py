from dataclasses import dataclass, field



@dataclass
class GetGenesByKeywordUsingGetPathParams:
    keyword: str = field(default=None, metadata={'path_param': { 'field_name': 'keyword', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesByKeywordUsingGetRequest:
    path_params: GetGenesByKeywordUsingGetPathParams = field(default=None)
    

@dataclass
class GetGenesByKeywordUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

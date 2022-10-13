from dataclasses import dataclass, field



@dataclass
class GetExpressionForTaxonUsingGetPathParams:
    taxon_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExpressionForTaxonUsingGetRequest:
    path_params: GetExpressionForTaxonUsingGetPathParams = field(default=None)
    

@dataclass
class GetExpressionForTaxonUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

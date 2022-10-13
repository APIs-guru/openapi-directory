from dataclasses import dataclass, field



@dataclass
class GetVariantsForTaxonUsingGetPathParams:
    taxon_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVariantsForTaxonUsingGetRequest:
    path_params: GetVariantsForTaxonUsingGetPathParams = field(default=None)
    

@dataclass
class GetVariantsForTaxonUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPhenotypesForTaxonUsingGetPathParams:
    taxon_id: str = field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPhenotypesForTaxonUsingGetRequest:
    path_params: GetPhenotypesForTaxonUsingGetPathParams = field()
    

@dataclass
class GetPhenotypesForTaxonUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

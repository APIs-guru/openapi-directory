from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAllelesForTaxonUsingGetPathParams:
    taxon_id: str = field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllelesForTaxonUsingGetRequest:
    path_params: GetAllelesForTaxonUsingGetPathParams = field()
    

@dataclass
class GetAllelesForTaxonUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

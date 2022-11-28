from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetVariantsForTaxonUsingGetPathParams:
    taxon_id: str = field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVariantsForTaxonUsingGetRequest:
    path_params: GetVariantsForTaxonUsingGetPathParams = field()
    

@dataclass
class GetVariantsForTaxonUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

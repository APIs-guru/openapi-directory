from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetExpressionForTaxonUsingGetPathParams:
    taxon_id: str = field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExpressionForTaxonUsingGetRequest:
    path_params: GetExpressionForTaxonUsingGetPathParams = field()
    

@dataclass
class GetExpressionForTaxonUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

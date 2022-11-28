from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAffectedGenomicModelsUsingGetPathParams:
    taxon_id: str = field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAffectedGenomicModelsUsingGetRequest:
    path_params: GetAffectedGenomicModelsUsingGetPathParams = field()
    

@dataclass
class GetAffectedGenomicModelsUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

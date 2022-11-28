from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGenesByAffyIDUsingGetPathParams:
    affy_id: str = field(metadata={'path_param': { 'field_name': 'affyId', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesByAffyIDUsingGetRequest:
    path_params: GetGenesByAffyIDUsingGetPathParams = field()
    

@dataclass
class GetGenesByAffyIDUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

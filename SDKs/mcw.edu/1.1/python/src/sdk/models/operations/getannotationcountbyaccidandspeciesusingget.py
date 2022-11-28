from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAnnotationCountByAccIDAndSpeciesUsingGetPathParams:
    acc_id: str = field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    include_children: bool = field(metadata={'path_param': { 'field_name': 'includeChildren', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationCountByAccIDAndSpeciesUsingGetRequest:
    path_params: GetAnnotationCountByAccIDAndSpeciesUsingGetPathParams = field()
    

@dataclass
class GetAnnotationCountByAccIDAndSpeciesUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

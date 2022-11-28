from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAnnotationsByRgdIDAndOntologyUsingGetPathParams:
    ontology_prefix: str = field(metadata={'path_param': { 'field_name': 'ontologyPrefix', 'style': 'simple', 'explode': False }})
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationsByRgdIDAndOntologyUsingGetRequest:
    path_params: GetAnnotationsByRgdIDAndOntologyUsingGetPathParams = field()
    

@dataclass
class GetAnnotationsByRgdIDAndOntologyUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

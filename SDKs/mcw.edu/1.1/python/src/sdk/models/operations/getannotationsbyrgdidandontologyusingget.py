from dataclasses import dataclass, field



@dataclass
class GetAnnotationsByRgdIDAndOntologyUsingGetPathParams:
    ontology_prefix: str = field(default=None, metadata={'path_param': { 'field_name': 'ontologyPrefix', 'style': 'simple', 'explode': False }})
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationsByRgdIDAndOntologyUsingGetRequest:
    path_params: GetAnnotationsByRgdIDAndOntologyUsingGetPathParams = field(default=None)
    

@dataclass
class GetAnnotationsByRgdIDAndOntologyUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

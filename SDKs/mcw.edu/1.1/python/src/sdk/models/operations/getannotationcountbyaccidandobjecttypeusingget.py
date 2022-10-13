from dataclasses import dataclass, field



@dataclass
class GetAnnotationCountByAccIDAndObjectTypeUsingGetPathParams:
    acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    include_children: bool = field(default=None, metadata={'path_param': { 'field_name': 'includeChildren', 'style': 'simple', 'explode': False }})
    object_type: int = field(default=None, metadata={'path_param': { 'field_name': 'objectType', 'style': 'simple', 'explode': False }})
    species_type_key: int = field(default=None, metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationCountByAccIDAndObjectTypeUsingGetRequest:
    path_params: GetAnnotationCountByAccIDAndObjectTypeUsingGetPathParams = field(default=None)
    

@dataclass
class GetAnnotationCountByAccIDAndObjectTypeUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

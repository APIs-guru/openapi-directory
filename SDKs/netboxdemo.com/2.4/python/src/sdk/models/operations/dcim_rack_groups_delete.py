from dataclasses import dataclass, field



@dataclass
class DcimRackGroupsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackGroupsDeleteRequest:
    path_params: DcimRackGroupsDeletePathParams = field()
    

@dataclass
class DcimRackGroupsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    

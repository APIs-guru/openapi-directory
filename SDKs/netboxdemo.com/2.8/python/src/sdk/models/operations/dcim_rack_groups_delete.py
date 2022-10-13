from dataclasses import dataclass, field



@dataclass
class DcimRackGroupsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackGroupsDeleteRequest:
    path_params: DcimRackGroupsDeletePathParams = field(default=None)
    

@dataclass
class DcimRackGroupsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

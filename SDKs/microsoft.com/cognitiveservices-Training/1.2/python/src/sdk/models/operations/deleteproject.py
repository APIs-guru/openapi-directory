from dataclasses import dataclass, field



@dataclass
class DeleteProjectPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectRequest:
    headers: DeleteProjectHeaders = field()
    path_params: DeleteProjectPathParams = field()
    

@dataclass
class DeleteProjectResponse:
    content_type: str = field()
    status_code: int = field()
    

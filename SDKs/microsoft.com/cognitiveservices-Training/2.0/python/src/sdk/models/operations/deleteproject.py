from dataclasses import dataclass, field



@dataclass
class DeleteProjectPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectRequest:
    path_params: DeleteProjectPathParams = field(default=None)
    headers: DeleteProjectHeaders = field(default=None)
    

@dataclass
class DeleteProjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

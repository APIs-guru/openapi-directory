from dataclasses import dataclass, field



@dataclass
class DeleteIterationPathParams:
    iteration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIterationHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class DeleteIterationRequest:
    path_params: DeleteIterationPathParams = field(default=None)
    headers: DeleteIterationHeaders = field(default=None)
    

@dataclass
class DeleteIterationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field



@dataclass
class DeleteIterationPathParams:
    iteration_id: str = field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIterationHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIterationRequest:
    headers: DeleteIterationHeaders = field()
    path_params: DeleteIterationPathParams = field()
    

@dataclass
class DeleteIterationResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class DeleteInstancesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstancesIDRequest:
    path_params: DeleteInstancesIDPathParams = field(default=None)
    

@dataclass
class DeleteInstancesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

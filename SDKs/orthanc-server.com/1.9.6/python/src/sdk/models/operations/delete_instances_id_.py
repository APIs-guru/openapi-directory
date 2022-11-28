from dataclasses import dataclass, field



@dataclass
class DeleteInstancesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstancesIDRequest:
    path_params: DeleteInstancesIDPathParams = field()
    

@dataclass
class DeleteInstancesIDResponse:
    content_type: str = field()
    status_code: int = field()
    

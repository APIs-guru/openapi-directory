from dataclasses import dataclass, field



@dataclass
class DeleteSetupV1BusinessusersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1BusinessusersIDRequest:
    path_params: DeleteSetupV1BusinessusersIDPathParams = field()
    

@dataclass
class DeleteSetupV1BusinessusersIDResponse:
    content_type: str = field()
    status_code: int = field()
    

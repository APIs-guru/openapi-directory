from dataclasses import dataclass, field



@dataclass
class DeleteSetupV1BusinessusersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1BusinessusersIDRequest:
    path_params: DeleteSetupV1BusinessusersIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1BusinessusersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

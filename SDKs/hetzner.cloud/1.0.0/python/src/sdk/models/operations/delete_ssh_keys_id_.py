from dataclasses import dataclass, field



@dataclass
class DeleteSSHKeysIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSSHKeysIDRequest:
    path_params: DeleteSSHKeysIDPathParams = field()
    

@dataclass
class DeleteSSHKeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    

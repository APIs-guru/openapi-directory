from dataclasses import dataclass, field



@dataclass
class DeleteSSHKeysIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSSHKeysIDRequest:
    path_params: DeleteSSHKeysIDPathParams = field(default=None)
    

@dataclass
class DeleteSSHKeysIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

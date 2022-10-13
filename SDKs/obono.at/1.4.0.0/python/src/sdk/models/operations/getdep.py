from dataclasses import dataclass, field



@dataclass
class GetDepPathParams:
    registrierkasse_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDepRequest:
    path_params: GetDepPathParams = field(default=None)
    

@dataclass
class GetDepResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

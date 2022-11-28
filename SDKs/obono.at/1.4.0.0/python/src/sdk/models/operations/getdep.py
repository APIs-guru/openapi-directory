from dataclasses import dataclass, field



@dataclass
class GetDepPathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDepRequest:
    path_params: GetDepPathParams = field()
    

@dataclass
class GetDepResponse:
    content_type: str = field()
    status_code: int = field()
    

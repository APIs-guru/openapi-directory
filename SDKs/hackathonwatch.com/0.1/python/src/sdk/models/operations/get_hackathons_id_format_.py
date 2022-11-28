from dataclasses import dataclass, field



@dataclass
class GetHackathonsIDFormatPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHackathonsIDFormatRequest:
    path_params: GetHackathonsIDFormatPathParams = field()
    

@dataclass
class GetHackathonsIDFormatResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class GetHackathonsIDFormatPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHackathonsIDFormatRequest:
    path_params: GetHackathonsIDFormatPathParams = field(default=None)
    

@dataclass
class GetHackathonsIDFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

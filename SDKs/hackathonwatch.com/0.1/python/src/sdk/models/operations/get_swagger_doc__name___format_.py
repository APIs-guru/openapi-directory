from dataclasses import dataclass, field



@dataclass
class GetSwaggerDocNameFormatPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSwaggerDocNameFormatRequest:
    path_params: GetSwaggerDocNameFormatPathParams = field(default=None)
    

@dataclass
class GetSwaggerDocNameFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

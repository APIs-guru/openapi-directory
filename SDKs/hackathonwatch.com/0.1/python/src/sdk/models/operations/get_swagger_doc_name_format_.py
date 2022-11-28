from dataclasses import dataclass, field



@dataclass
class GetSwaggerDocNameFormatPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSwaggerDocNameFormatRequest:
    path_params: GetSwaggerDocNameFormatPathParams = field()
    

@dataclass
class GetSwaggerDocNameFormatResponse:
    content_type: str = field()
    status_code: int = field()
    

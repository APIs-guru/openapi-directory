from dataclasses import dataclass, field



@dataclass
class GetCookiesSetNameValuePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCookiesSetNameValueRequest:
    path_params: GetCookiesSetNameValuePathParams = field()
    

@dataclass
class GetCookiesSetNameValueResponse:
    content_type: str = field()
    status_code: int = field()
    

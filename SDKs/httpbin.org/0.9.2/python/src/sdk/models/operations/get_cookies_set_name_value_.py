from dataclasses import dataclass, field



@dataclass
class GetCookiesSetNameValuePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    value: str = field(default=None, metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCookiesSetNameValueRequest:
    path_params: GetCookiesSetNameValuePathParams = field(default=None)
    

@dataclass
class GetCookiesSetNameValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

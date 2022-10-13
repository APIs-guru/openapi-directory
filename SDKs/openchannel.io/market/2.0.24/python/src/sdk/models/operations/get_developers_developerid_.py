from dataclasses import dataclass, field



@dataclass
class GetDevelopersDeveloperIDPathParams:
    developer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDevelopersDeveloperIDRequest:
    path_params: GetDevelopersDeveloperIDPathParams = field(default=None)
    

@dataclass
class GetDevelopersDeveloperIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

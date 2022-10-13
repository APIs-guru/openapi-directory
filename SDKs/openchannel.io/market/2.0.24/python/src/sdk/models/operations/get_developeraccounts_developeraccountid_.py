from dataclasses import dataclass, field



@dataclass
class GetDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeveloperAccountsDeveloperAccountIDRequest:
    path_params: GetDeveloperAccountsDeveloperAccountIDPathParams = field(default=None)
    

@dataclass
class GetDeveloperAccountsDeveloperAccountIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

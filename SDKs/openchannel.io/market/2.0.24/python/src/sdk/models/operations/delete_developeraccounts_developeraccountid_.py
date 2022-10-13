from dataclasses import dataclass, field



@dataclass
class DeleteDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeveloperAccountsDeveloperAccountIDRequest:
    path_params: DeleteDeveloperAccountsDeveloperAccountIDPathParams = field(default=None)
    

@dataclass
class DeleteDeveloperAccountsDeveloperAccountIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field



@dataclass
class DeleteDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = field(metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDeveloperAccountsDeveloperAccountIDRequest:
    path_params: DeleteDeveloperAccountsDeveloperAccountIDPathParams = field()
    

@dataclass
class DeleteDeveloperAccountsDeveloperAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class DeleteDevelopersDeveloperIDPathParams:
    developer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDevelopersDeveloperIDRequest:
    path_params: DeleteDevelopersDeveloperIDPathParams = field(default=None)
    

@dataclass
class DeleteDevelopersDeveloperIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

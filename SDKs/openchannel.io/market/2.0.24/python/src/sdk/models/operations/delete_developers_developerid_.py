from dataclasses import dataclass, field



@dataclass
class DeleteDevelopersDeveloperIDPathParams:
    developer_id: str = field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDevelopersDeveloperIDRequest:
    path_params: DeleteDevelopersDeveloperIDPathParams = field()
    

@dataclass
class DeleteDevelopersDeveloperIDResponse:
    content_type: str = field()
    status_code: int = field()
    

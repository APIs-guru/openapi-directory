from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDevelopersDeveloperIDPathParams:
    developer_id: str = field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDevelopersDeveloperIDRequest:
    path_params: GetDevelopersDeveloperIDPathParams = field()
    

@dataclass
class GetDevelopersDeveloperIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

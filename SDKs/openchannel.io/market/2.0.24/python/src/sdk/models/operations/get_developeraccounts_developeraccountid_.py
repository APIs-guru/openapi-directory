from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = field(metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeveloperAccountsDeveloperAccountIDRequest:
    path_params: GetDeveloperAccountsDeveloperAccountIDPathParams = field()
    

@dataclass
class GetDeveloperAccountsDeveloperAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetServerLogsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetServerLogsRequest:
    security: GetServerLogsSecurity = field()
    

@dataclass
class GetServerLogsResponse:
    content_type: str = field()
    status_code: int = field()
    log_files: Optional[List[shared.LogFile]] = field(default=None)
    

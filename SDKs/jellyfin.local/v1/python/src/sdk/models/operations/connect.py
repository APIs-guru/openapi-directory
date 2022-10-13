from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ConnectQueryParams:
    secret: str = field(default=None, metadata={'query_param': { 'field_name': 'secret', 'style': 'form', 'explode': True }})
    

@dataclass
class ConnectRequest:
    query_params: ConnectQueryParams = field(default=None)
    

@dataclass
class ConnectResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    quick_connect_result: Optional[shared.QuickConnectResult] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesLogsListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesLogsListRequest:
    path_params: NodesLogsListPathParams = field()
    

@dataclass
class NodesLogsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

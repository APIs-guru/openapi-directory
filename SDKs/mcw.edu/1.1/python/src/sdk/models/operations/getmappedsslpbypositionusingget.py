from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMappedSslpByPositionUsingGetPathParams:
    chr: str = field(metadata={'path_param': { 'field_name': 'chr', 'style': 'simple', 'explode': False }})
    map_key: int = field(metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    start: int = field(metadata={'path_param': { 'field_name': 'start', 'style': 'simple', 'explode': False }})
    stop: int = field(metadata={'path_param': { 'field_name': 'stop', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMappedSslpByPositionUsingGetRequest:
    path_params: GetMappedSslpByPositionUsingGetPathParams = field()
    

@dataclass
class GetMappedSslpByPositionUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

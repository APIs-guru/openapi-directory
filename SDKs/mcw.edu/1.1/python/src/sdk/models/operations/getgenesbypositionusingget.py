from dataclasses import dataclass, field



@dataclass
class GetGenesByPositionUsingGetPathParams:
    chr: str = field(default=None, metadata={'path_param': { 'field_name': 'chr', 'style': 'simple', 'explode': False }})
    map_key: int = field(default=None, metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    start: int = field(default=None, metadata={'path_param': { 'field_name': 'start', 'style': 'simple', 'explode': False }})
    stop: int = field(default=None, metadata={'path_param': { 'field_name': 'stop', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenesByPositionUsingGetRequest:
    path_params: GetGenesByPositionUsingGetPathParams = field(default=None)
    

@dataclass
class GetGenesByPositionUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

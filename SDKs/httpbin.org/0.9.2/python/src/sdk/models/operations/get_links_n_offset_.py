from dataclasses import dataclass, field



@dataclass
class GetLinksNOffsetPathParams:
    n: int = field(default=None, metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    offset: int = field(default=None, metadata={'path_param': { 'field_name': 'offset', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinksNOffsetRequest:
    path_params: GetLinksNOffsetPathParams = field(default=None)
    

@dataclass
class GetLinksNOffsetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

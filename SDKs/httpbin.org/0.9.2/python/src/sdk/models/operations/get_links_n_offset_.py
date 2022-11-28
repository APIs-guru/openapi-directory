from dataclasses import dataclass, field



@dataclass
class GetLinksNOffsetPathParams:
    n: int = field(metadata={'path_param': { 'field_name': 'n', 'style': 'simple', 'explode': False }})
    offset: int = field(metadata={'path_param': { 'field_name': 'offset', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinksNOffsetRequest:
    path_params: GetLinksNOffsetPathParams = field()
    

@dataclass
class GetLinksNOffsetResponse:
    content_type: str = field()
    status_code: int = field()
    

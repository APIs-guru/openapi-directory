from dataclasses import dataclass, field



@dataclass
class GetBadgeQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBadgeRequest:
    query_params: GetBadgeQueryParams = field()
    

@dataclass
class GetBadgeResponse:
    content_type: str = field()
    status_code: int = field()
    

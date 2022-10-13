from dataclasses import dataclass, field



@dataclass
class GetBadgeQueryParams:
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBadgeRequest:
    query_params: GetBadgeQueryParams = field(default=None)
    

@dataclass
class GetBadgeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

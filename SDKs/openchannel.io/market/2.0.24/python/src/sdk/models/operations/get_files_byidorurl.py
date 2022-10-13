from dataclasses import dataclass, field



@dataclass
class GetFilesByIDOrURLQueryParams:
    file_id_or_url: str = field(default=None, metadata={'query_param': { 'field_name': 'fileIdOrUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFilesByIDOrURLRequest:
    query_params: GetFilesByIDOrURLQueryParams = field(default=None)
    

@dataclass
class GetFilesByIDOrURLResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

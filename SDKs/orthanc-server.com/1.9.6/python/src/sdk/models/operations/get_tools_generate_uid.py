from dataclasses import dataclass, field



@dataclass
class GetToolsGenerateUIDQueryParams:
    level: str = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    

@dataclass
class GetToolsGenerateUIDRequest:
    query_params: GetToolsGenerateUIDQueryParams = field(default=None)
    

@dataclass
class GetToolsGenerateUIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

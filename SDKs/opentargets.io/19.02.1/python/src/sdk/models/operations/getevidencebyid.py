from dataclasses import dataclass, field



@dataclass
class GetEvidenceByIDQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEvidenceByIDRequest:
    query_params: GetEvidenceByIDQueryParams = field(default=None)
    

@dataclass
class GetEvidenceByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

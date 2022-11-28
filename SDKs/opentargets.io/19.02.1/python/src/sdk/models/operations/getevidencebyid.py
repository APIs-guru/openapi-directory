from dataclasses import dataclass, field



@dataclass
class GetEvidenceByIDQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEvidenceByIDRequest:
    query_params: GetEvidenceByIDQueryParams = field()
    

@dataclass
class GetEvidenceByIDResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class GetAssociationByIDQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociationByIDRequest:
    query_params: GetAssociationByIDQueryParams = field(default=None)
    

@dataclass
class GetAssociationByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field



@dataclass
class GetAssociationByIDQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociationByIDRequest:
    query_params: GetAssociationByIDQueryParams = field()
    

@dataclass
class GetAssociationByIDResponse:
    content_type: str = field()
    status_code: int = field()
    

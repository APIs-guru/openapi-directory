from dataclasses import dataclass, field



@dataclass
class GetDrugByIDPathParams:
    drug_id: str = field(metadata={'path_param': { 'field_name': 'DRUG_ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDrugByIDQueryParams:
    drug_id: str = field(metadata={'query_param': { 'field_name': 'drug_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDrugByIDRequest:
    path_params: GetDrugByIDPathParams = field()
    query_params: GetDrugByIDQueryParams = field()
    

@dataclass
class GetDrugByIDResponse:
    content_type: str = field()
    status_code: int = field()
    

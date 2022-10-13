from dataclasses import dataclass, field



@dataclass
class GetDrugByIDPathParams:
    drug_id: str = field(default=None, metadata={'path_param': { 'field_name': 'DRUG_ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDrugByIDQueryParams:
    drug_id: str = field(default=None, metadata={'query_param': { 'field_name': 'drug_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDrugByIDRequest:
    path_params: GetDrugByIDPathParams = field(default=None)
    query_params: GetDrugByIDQueryParams = field(default=None)
    

@dataclass
class GetDrugByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

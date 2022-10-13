from dataclasses import dataclass, field



@dataclass
class GetNumbersFactQueryParams:
    number: int = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumbersFactSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersFactRequest:
    query_params: GetNumbersFactQueryParams = field(default=None)
    security: GetNumbersFactSecurity = field(default=None)
    

@dataclass
class GetNumbersFactResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

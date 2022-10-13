from dataclasses import dataclass, field



@dataclass
class GetNumbersNodSecurity:
    x_mathtools_api_secret: shared.SchemeXMathtoolsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNumbersNodRequest:
    security: GetNumbersNodSecurity = field(default=None)
    

@dataclass
class GetNumbersNodResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

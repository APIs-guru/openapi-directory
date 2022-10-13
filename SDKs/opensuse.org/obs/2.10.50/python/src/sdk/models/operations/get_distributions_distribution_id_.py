from dataclasses import dataclass, field



@dataclass
class GetDistributionsDistributionIDPathParams:
    distribution_id: int = field(default=None, metadata={'path_param': { 'field_name': 'distribution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistributionsDistributionIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetDistributionsDistributionIDRequest:
    path_params: GetDistributionsDistributionIDPathParams = field(default=None)
    security: GetDistributionsDistributionIDSecurity = field(default=None)
    

@dataclass
class GetDistributionsDistributionIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

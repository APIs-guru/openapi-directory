from dataclasses import dataclass, field



@dataclass
class DeleteDistributionsDistributionIDPathParams:
    distribution_id: int = field(default=None, metadata={'path_param': { 'field_name': 'distribution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDistributionsDistributionIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDistributionsDistributionIDRequest:
    path_params: DeleteDistributionsDistributionIDPathParams = field(default=None)
    security: DeleteDistributionsDistributionIDSecurity = field(default=None)
    

@dataclass
class DeleteDistributionsDistributionIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

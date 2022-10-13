from dataclasses import dataclass, field



@dataclass
class TenancyTenantsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantsDeleteRequest:
    path_params: TenancyTenantsDeletePathParams = field(default=None)
    

@dataclass
class TenancyTenantsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

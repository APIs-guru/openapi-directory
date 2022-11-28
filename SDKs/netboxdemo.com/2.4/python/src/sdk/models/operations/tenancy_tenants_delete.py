from dataclasses import dataclass, field



@dataclass
class TenancyTenantsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantsDeleteRequest:
    path_params: TenancyTenantsDeletePathParams = field()
    

@dataclass
class TenancyTenantsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    

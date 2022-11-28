from dataclasses import dataclass, field



@dataclass
class TenancyTenantGroupsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantGroupsDeleteRequest:
    path_params: TenancyTenantGroupsDeletePathParams = field()
    

@dataclass
class TenancyTenantGroupsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    

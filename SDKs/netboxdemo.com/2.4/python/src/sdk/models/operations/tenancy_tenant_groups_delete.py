from dataclasses import dataclass, field



@dataclass
class TenancyTenantGroupsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TenancyTenantGroupsDeleteRequest:
    path_params: TenancyTenantGroupsDeletePathParams = field(default=None)
    

@dataclass
class TenancyTenantGroupsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

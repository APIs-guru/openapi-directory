from dataclasses import dataclass, field



@dataclass
class DeleteRealmAdminEventsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAdminEventsRequest:
    path_params: DeleteRealmAdminEventsPathParams = field(default=None)
    

@dataclass
class DeleteRealmAdminEventsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

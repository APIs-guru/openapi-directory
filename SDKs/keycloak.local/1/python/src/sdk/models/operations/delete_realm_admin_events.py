from dataclasses import dataclass, field



@dataclass
class DeleteRealmAdminEventsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAdminEventsRequest:
    path_params: DeleteRealmAdminEventsPathParams = field()
    

@dataclass
class DeleteRealmAdminEventsResponse:
    content_type: str = field()
    status_code: int = field()
    

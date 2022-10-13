from dataclasses import dataclass, field



@dataclass
class DeleteRealmEventsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmEventsRequest:
    path_params: DeleteRealmEventsPathParams = field(default=None)
    

@dataclass
class DeleteRealmEventsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

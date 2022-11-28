from dataclasses import dataclass, field



@dataclass
class DeleteRealmEventsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmEventsRequest:
    path_params: DeleteRealmEventsPathParams = field()
    

@dataclass
class DeleteRealmEventsResponse:
    content_type: str = field()
    status_code: int = field()
    

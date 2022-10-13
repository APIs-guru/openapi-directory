from dataclasses import dataclass, field



@dataclass
class RegistrationsViewOnlyLinksReadPathParams:
    link_id: str = field(default=None, metadata={'path_param': { 'field_name': 'link_id', 'style': 'simple', 'explode': False }})
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsViewOnlyLinksReadRequest:
    path_params: RegistrationsViewOnlyLinksReadPathParams = field(default=None)
    

@dataclass
class RegistrationsViewOnlyLinksReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

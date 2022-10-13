from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
POST_V0_5_CONSENTS_ON_FETCH_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
]


@dataclass
class PostV05ConsentsOnFetchHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    x_hiu_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIU-ID' }})
    

@dataclass
class PostV05ConsentsOnFetchRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    consent_artefact_response: Optional[shared.ConsentArtefactResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentsOnFetchRequest:
    server_url: Optional[str] = field(default=None)
    headers: PostV05ConsentsOnFetchHeaders = field(default=None)
    request: PostV05ConsentsOnFetchRequests = field(default=None)
    

@dataclass
class PostV05ConsentsOnFetchResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeletePodcastByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePodcastByIDQueryParams:
    reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclass
class DeletePodcastByIDHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePodcastByIDRequest:
    path_params: DeletePodcastByIDPathParams = field(default=None)
    query_params: DeletePodcastByIDQueryParams = field(default=None)
    headers: DeletePodcastByIDHeaders = field(default=None)
    

@dataclass
class DeletePodcastByIDResponse:
    content_type: str = field(default=None)
    delete_podcast_response: Optional[shared.DeletePodcastResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

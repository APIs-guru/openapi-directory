from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeletePodcastByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePodcastByIDQueryParams:
    reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reason', 'style': 'form', 'explode': True }})
    

@dataclass
class DeletePodcastByIDHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePodcastByIDRequest:
    headers: DeletePodcastByIDHeaders = field()
    path_params: DeletePodcastByIDPathParams = field()
    query_params: DeletePodcastByIDQueryParams = field()
    

@dataclass
class DeletePodcastByIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    delete_podcast_response: Optional[shared.DeletePodcastResponse] = field(default=None)
    

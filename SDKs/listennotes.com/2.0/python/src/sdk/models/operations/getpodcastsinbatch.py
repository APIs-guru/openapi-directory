from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPodcastsInBatchHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPodcastsInBatchRequest:
    headers: GetPodcastsInBatchHeaders = field(default=None)
    request: Optional[shared.GetPodcastsInBatchForm] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class GetPodcastsInBatchResponse:
    content_type: str = field(default=None)
    get_podcasts_in_batch_response: Optional[shared.GetPodcastsInBatchResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

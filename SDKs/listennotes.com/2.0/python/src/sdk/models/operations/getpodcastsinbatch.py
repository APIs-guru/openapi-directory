from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPodcastsInBatchHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPodcastsInBatchRequest:
    headers: GetPodcastsInBatchHeaders = field()
    request: Optional[shared.GetPodcastsInBatchForm] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class GetPodcastsInBatchResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_podcasts_in_batch_response: Optional[shared.GetPodcastsInBatchResponse] = field(default=None)
    

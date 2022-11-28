from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SubmitPodcastHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubmitPodcastRequest:
    headers: SubmitPodcastHeaders = field()
    request: shared.SubmitPodcastForm = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class SubmitPodcastResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    submit_podcast_response: Optional[shared.SubmitPodcastResponse] = field(default=None)
    

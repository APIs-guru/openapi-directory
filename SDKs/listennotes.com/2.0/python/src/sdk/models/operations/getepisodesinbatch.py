from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEpisodesInBatchHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodesInBatchRequest:
    headers: GetEpisodesInBatchHeaders = field()
    request: shared.GetEpisodesInBatchForm = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class GetEpisodesInBatchResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_episodes_in_batch_response: Optional[shared.GetEpisodesInBatchResponse] = field(default=None)
    

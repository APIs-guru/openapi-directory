from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEpisodesInBatchHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodesInBatchRequest:
    headers: GetEpisodesInBatchHeaders = field(default=None)
    request: shared.GetEpisodesInBatchForm = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class GetEpisodesInBatchResponse:
    content_type: str = field(default=None)
    get_episodes_in_batch_response: Optional[shared.GetEpisodesInBatchResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

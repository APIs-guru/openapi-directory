from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEpisodeByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodeByIDQueryParams:
    show_transcript: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'show_transcript', 'style': 'form', 'explode': False }})
    

@dataclass
class GetEpisodeByIDHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodeByIDRequest:
    path_params: GetEpisodeByIDPathParams = field(default=None)
    query_params: GetEpisodeByIDQueryParams = field(default=None)
    headers: GetEpisodeByIDHeaders = field(default=None)
    

@dataclass
class GetEpisodeByIDResponse:
    content_type: str = field(default=None)
    episode_full: Optional[shared.EpisodeFull] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEpisodeByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodeByIDQueryParams:
    show_transcript: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'show_transcript', 'style': 'form', 'explode': False }})
    

@dataclass
class GetEpisodeByIDHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodeByIDRequest:
    headers: GetEpisodeByIDHeaders = field()
    path_params: GetEpisodeByIDPathParams = field()
    query_params: GetEpisodeByIDQueryParams = field()
    

@dataclass
class GetEpisodeByIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    episode_full: Optional[shared.EpisodeFull] = field(default=None)
    

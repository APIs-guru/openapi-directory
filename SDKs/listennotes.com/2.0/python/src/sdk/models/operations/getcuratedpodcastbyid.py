from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCuratedPodcastByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCuratedPodcastByIDHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCuratedPodcastByIDRequest:
    path_params: GetCuratedPodcastByIDPathParams = field(default=None)
    headers: GetCuratedPodcastByIDHeaders = field(default=None)
    

@dataclass
class GetCuratedPodcastByIDResponse:
    content_type: str = field(default=None)
    curated_list_full: Optional[shared.CuratedListFull] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

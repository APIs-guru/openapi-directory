from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GamesScoresGetTimeSpanEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL = "ALL"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass
class GamesScoresGetPathParams:
    leaderboard_id: str = field(default=None, metadata={'path_param': { 'field_name': 'leaderboardId', 'style': 'simple', 'explode': False }})
    player_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    time_span: GamesScoresGetTimeSpanEnum = field(default=None, metadata={'path_param': { 'field_name': 'timeSpan', 'style': 'simple', 'explode': False }})
    
class GamesScoresGetIncludeRankTypeEnum(str, Enum):
    INCLUDE_RANK_TYPE_UNSPECIFIED = "INCLUDE_RANK_TYPE_UNSPECIFIED"
    ALL = "ALL"
    PUBLIC = "PUBLIC"
    SOCIAL = "SOCIAL"
    FRIENDS = "FRIENDS"


@dataclass
class GamesScoresGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_rank_type: Optional[GamesScoresGetIncludeRankTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'includeRankType', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class GamesScoresGetSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GamesScoresGetRequest:
    path_params: GamesScoresGetPathParams = field(default=None)
    query_params: GamesScoresGetQueryParams = field(default=None)
    security: GamesScoresGetSecurity = field(default=None)
    

@dataclass
class GamesScoresGetResponse:
    content_type: str = field(default=None)
    player_leaderboard_score_list_response: Optional[shared.PlayerLeaderboardScoreListResponse] = field(default=None)
    status_code: int = field(default=None)
    

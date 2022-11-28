from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GamesScoresListWindowCollectionEnum(str, Enum):
    SCORE_COLLECTION_UNSPECIFIED = "SCORE_COLLECTION_UNSPECIFIED"
    PUBLIC = "PUBLIC"
    SOCIAL = "SOCIAL"
    FRIENDS = "FRIENDS"


@dataclass
class GamesScoresListWindowPathParams:
    collection: GamesScoresListWindowCollectionEnum = field(metadata={'path_param': { 'field_name': 'collection', 'style': 'simple', 'explode': False }})
    leaderboard_id: str = field(metadata={'path_param': { 'field_name': 'leaderboardId', 'style': 'simple', 'explode': False }})
    
class GamesScoresListWindowTimeSpanEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass
class GamesScoresListWindowQueryParams:
    time_span: GamesScoresListWindowTimeSpanEnum = field(metadata={'query_param': { 'field_name': 'timeSpan', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    results_above: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'resultsAbove', 'style': 'form', 'explode': True }})
    return_top_if_absent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnTopIfAbsent', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class GamesScoresListWindowSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GamesScoresListWindowRequest:
    path_params: GamesScoresListWindowPathParams = field()
    query_params: GamesScoresListWindowQueryParams = field()
    security: GamesScoresListWindowSecurity = field()
    

@dataclass
class GamesScoresListWindowResponse:
    content_type: str = field()
    status_code: int = field()
    leaderboard_scores: Optional[shared.LeaderboardScores] = field(default=None)
    

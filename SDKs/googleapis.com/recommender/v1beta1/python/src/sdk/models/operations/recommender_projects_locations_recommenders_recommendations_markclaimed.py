from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest:
    path_params: RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedPathParams = field()
    query_params: RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedQueryParams = field()
    security: RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedSecurity = field()
    request: Optional[shared.GoogleCloudRecommenderV1beta1MarkRecommendationClaimedRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_recommender_v1beta1_recommendation: Optional[shared.GoogleCloudRecommenderV1beta1Recommendation] = field(default=None)
    

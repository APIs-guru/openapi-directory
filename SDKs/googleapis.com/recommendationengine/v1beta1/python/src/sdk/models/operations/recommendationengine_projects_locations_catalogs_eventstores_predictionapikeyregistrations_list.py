from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListRequest:
    path_params: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListPathParams = field()
    query_params: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListQueryParams = field()
    security: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListSecurity = field()
    

@dataclass
class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsListResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_recommendationengine_v1beta1_list_prediction_api_key_registrations_response: Optional[shared.GoogleCloudRecommendationengineV1beta1ListPredictionAPIKeyRegistrationsResponse] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams:
    serving_config: str = field(metadata={'path_param': { 'field_name': 'servingConfig', 'style': 'simple', 'explode': False }})
    

@dataclass
class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams:
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
class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendRequest:
    path_params: DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams = field()
    query_params: DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendQueryParams = field()
    security: DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendSecurity = field()
    request: Optional[shared.GoogleCloudDiscoveryengineV1betaRecommendRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_discoveryengine_v1beta_recommend_response: Optional[shared.GoogleCloudDiscoveryengineV1betaRecommendResponse] = field(default=None)
    

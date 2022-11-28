from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class RetailProjectsLocationsCatalogsCompleteQueryPathParams:
    catalog: str = field(metadata={'path_param': { 'field_name': 'catalog', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetailProjectsLocationsCatalogsCompleteQueryQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    dataset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dataset', 'style': 'form', 'explode': True }})
    device_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceType', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    language_codes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'languageCodes', 'style': 'form', 'explode': True }})
    max_suggestions: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxSuggestions', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    visitor_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'visitorId', 'style': 'form', 'explode': True }})
    

@dataclass
class RetailProjectsLocationsCatalogsCompleteQuerySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetailProjectsLocationsCatalogsCompleteQueryRequest:
    path_params: RetailProjectsLocationsCatalogsCompleteQueryPathParams = field()
    query_params: RetailProjectsLocationsCatalogsCompleteQueryQueryParams = field()
    security: RetailProjectsLocationsCatalogsCompleteQuerySecurity = field()
    

@dataclass
class RetailProjectsLocationsCatalogsCompleteQueryResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_retail_v2_complete_query_response: Optional[shared.GoogleCloudRetailV2CompleteQueryResponse] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams:
    conversation_profile: str = field(metadata={'path_param': { 'field_name': 'conversationProfile', 'style': 'simple', 'explode': False }})
    

@dataclass
class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams:
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
class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity:
    option1: Optional[DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest:
    path_params: DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigPathParams = field()
    query_params: DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigQueryParams = field()
    security: DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigSecurity = field()
    request: Optional[shared.GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse:
    content_type: str = field()
    status_code: int = field()
    google_longrunning_operation: Optional[shared.GoogleLongrunningOperation] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams:
    parent: str = field(default=None, metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams:
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
class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity:
    option1: Optional[DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest:
    path_params: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams = field(default=None)
    query_params: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams = field(default=None)
    request: Optional[shared.GoogleCloudDialogflowV2SuggestFaqAnswersRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity = field(default=None)
    

@dataclass
class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse:
    content_type: str = field(default=None)
    google_cloud_dialogflow_v2_suggest_faq_answers_response: Optional[shared.GoogleCloudDialogflowV2SuggestFaqAnswersResponse] = field(default=None)
    status_code: int = field(default=None)
    

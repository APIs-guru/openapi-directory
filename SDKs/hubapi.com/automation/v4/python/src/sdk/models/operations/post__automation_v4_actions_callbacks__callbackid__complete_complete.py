from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams:
    callback_id: str = field(default=None, metadata={'path_param': { 'field_name': 'callbackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurityOption1:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurityOption2:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity:
    option1: Optional[PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteRequest:
    path_params: PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams = field(default=None)
    request: shared.CallbackCompletionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity = field(default=None)
    

@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

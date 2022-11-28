from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams:
    callback_id: str = field(metadata={'path_param': { 'field_name': 'callbackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteRequest:
    path_params: PostAutomationV4ActionsCallbacksCallbackIDCompleteCompletePathParams = field()
    request: shared.CallbackCompletionRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteSecurity = field()
    

@dataclass
class PostAutomationV4ActionsCallbacksCallbackIDCompleteCompleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

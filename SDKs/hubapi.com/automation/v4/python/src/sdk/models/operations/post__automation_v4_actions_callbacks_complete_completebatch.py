from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption1:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption2:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity:
    option1: Optional[PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest:
    request: shared.BatchInputCallbackCompletionBatchRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity = field(default=None)
    

@dataclass
class PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

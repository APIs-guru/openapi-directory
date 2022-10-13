from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption1:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption2:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption3:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity:
    option1: Optional[PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest:
    request: shared.PublicUpdateSubscriptionStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity = field(default=None)
    

@dataclass
class PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    public_subscription_status: Optional[shared.PublicSubscriptionStatus] = field(default=None)
    status_code: int = field(default=None)
    

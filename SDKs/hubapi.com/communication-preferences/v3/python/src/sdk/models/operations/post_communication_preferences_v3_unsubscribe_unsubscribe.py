from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostCommunicationPreferencesV3UnsubscribeUnsubscribeRequest:
    request: shared.PublicUpdateSubscriptionStatusRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostCommunicationPreferencesV3UnsubscribeUnsubscribeSecurity = field()
    

@dataclass
class PostCommunicationPreferencesV3UnsubscribeUnsubscribeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    public_subscription_status: Optional[shared.PublicSubscriptionStatus] = field(default=None)
    

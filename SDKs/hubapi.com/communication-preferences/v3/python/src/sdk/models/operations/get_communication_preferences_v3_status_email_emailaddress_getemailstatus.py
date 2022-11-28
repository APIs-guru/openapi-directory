from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams:
    email_address: str = field(metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest:
    path_params: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams = field()
    security: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity = field()
    

@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    public_subscription_statuses_response: Optional[shared.PublicSubscriptionStatusesResponse] = field(default=None)
    

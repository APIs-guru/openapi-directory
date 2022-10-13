from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams:
    email_address: str = field(default=None, metadata={'path_param': { 'field_name': 'emailAddress', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity:
    option1: Optional[GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest:
    path_params: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams = field(default=None)
    security: GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity = field(default=None)
    

@dataclass
class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    public_subscription_statuses_response: Optional[shared.PublicSubscriptionStatusesResponse] = field(default=None)
    status_code: int = field(default=None)
    

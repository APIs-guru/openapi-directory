from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageSecurity:
    option1: Optional[GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageRequest:
    security: GetCommunicationPreferencesV3DefinitionsGetPageSecurity = field(default=None)
    

@dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscription_definitions_response: Optional[shared.SubscriptionDefinitionsResponse] = field(default=None)
    

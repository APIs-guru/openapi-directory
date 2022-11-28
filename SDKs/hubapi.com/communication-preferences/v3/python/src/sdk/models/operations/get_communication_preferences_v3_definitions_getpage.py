from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_legacy1: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    private_apps_legacy1: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageRequest:
    security: GetCommunicationPreferencesV3DefinitionsGetPageSecurity = field()
    

@dataclass
class GetCommunicationPreferencesV3DefinitionsGetPageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    subscription_definitions_response: Optional[shared.SubscriptionDefinitionsResponse] = field(default=None)
    

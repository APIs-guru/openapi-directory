from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams:
    external_event_id: str = field(metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams:
    external_account_id: str = field(metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveRequest:
    path_params: DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams = field()
    query_params: DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams = field()
    security: DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity = field()
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

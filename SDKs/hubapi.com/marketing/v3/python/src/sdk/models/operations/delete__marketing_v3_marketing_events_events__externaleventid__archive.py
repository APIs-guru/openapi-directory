from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams:
    external_event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'externalEventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams:
    external_account_id: str = field(default=None, metadata={'query_param': { 'field_name': 'externalAccountId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity:
    option1: Optional[DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveRequest:
    path_params: DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams = field(default=None)
    query_params: DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams = field(default=None)
    security: DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity = field(default=None)
    

@dataclass
class DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

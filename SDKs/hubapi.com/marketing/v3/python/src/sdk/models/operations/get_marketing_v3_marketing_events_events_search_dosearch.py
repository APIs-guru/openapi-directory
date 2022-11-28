from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity:
    hapikey: Optional[shared.SchemeHapikey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_legacy: Optional[shared.SchemeOauth2Legacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    private_apps_legacy: Optional[shared.SchemePrivateAppsLegacy] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchRequest:
    query_params: GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams = field()
    security: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity = field()
    

@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    collection_response_marketing_event_external_unique_identifier_no_paging: Optional[shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging] = field(default=None)
    

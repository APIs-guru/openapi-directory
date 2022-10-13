from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams:
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption1:
    hapikey: shared.SchemeHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption2:
    oauth2_legacy: shared.SchemeOauth2Legacy = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity:
    option1: Optional[GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchRequest:
    query_params: GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams = field(default=None)
    security: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity = field(default=None)
    

@dataclass
class GetMarketingV3MarketingEventsEventsSearchDoSearchResponse:
    body: bytes = field(default=None)
    collection_response_marketing_event_external_unique_identifier_no_paging: Optional[shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FaresSubscriptionsQueryParams:
    cabin_class: str = field(metadata={'query_param': { 'field_name': 'cabin-class', 'style': 'form', 'explode': True }})
    destination: str = field(metadata={'query_param': { 'field_name': 'destination', 'style': 'form', 'explode': True }})
    email: str = field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    lang: str = field(metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    origin: str = field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    trip_duration: str = field(metadata={'query_param': { 'field_name': 'trip-duration', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    trackingid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trackingid', 'style': 'form', 'explode': True }})
    

@dataclass
class FaresSubscriptionsHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class FaresSubscriptionsSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FaresSubscriptionsRequest:
    headers: FaresSubscriptionsHeaders = field()
    query_params: FaresSubscriptionsQueryParams = field()
    security: FaresSubscriptionsSecurity = field()
    

@dataclass
class FaresSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    fares_subscriptions_200_application_json_string: Optional[str] = field(default=None)
    

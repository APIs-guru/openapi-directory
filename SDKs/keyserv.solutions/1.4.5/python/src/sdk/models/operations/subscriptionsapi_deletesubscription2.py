from dataclasses import dataclass, field



@dataclass
class SubscriptionsAPIDeleteSubscription2PathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscriptionsAPIDeleteSubscription2QueryParams:
    keep: bool = field(default=None, metadata={'query_param': { 'field_name': 'keep', 'style': 'form', 'explode': True }})
    

@dataclass
class SubscriptionsAPIDeleteSubscription2Headers:
    x_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class SubscriptionsAPIDeleteSubscription2Request:
    path_params: SubscriptionsAPIDeleteSubscription2PathParams = field(default=None)
    query_params: SubscriptionsAPIDeleteSubscription2QueryParams = field(default=None)
    headers: SubscriptionsAPIDeleteSubscription2Headers = field(default=None)
    

@dataclass
class SubscriptionsAPIDeleteSubscription2Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

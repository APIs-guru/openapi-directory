from dataclasses import dataclass, field



@dataclass
class SubscriptionsAPIDeleteSubscription2PathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscriptionsAPIDeleteSubscription2QueryParams:
    keep: bool = field(metadata={'query_param': { 'field_name': 'keep', 'style': 'form', 'explode': True }})
    

@dataclass
class SubscriptionsAPIDeleteSubscription2Headers:
    x_api_key: str = field(metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscriptionsAPIDeleteSubscription2Request:
    headers: SubscriptionsAPIDeleteSubscription2Headers = field()
    path_params: SubscriptionsAPIDeleteSubscription2PathParams = field()
    query_params: SubscriptionsAPIDeleteSubscription2QueryParams = field()
    

@dataclass
class SubscriptionsAPIDeleteSubscription2Response:
    content_type: str = field()
    status_code: int = field()
    

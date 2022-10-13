from dataclasses import dataclass, field



@dataclass
class SubscriptionsAPIDeleteSubscriptionPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscriptionsAPIDeleteSubscriptionQueryParams:
    keep: bool = field(default=None, metadata={'query_param': { 'field_name': 'keep', 'style': 'form', 'explode': True }})
    

@dataclass
class SubscriptionsAPIDeleteSubscriptionHeaders:
    x_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class SubscriptionsAPIDeleteSubscriptionRequest:
    path_params: SubscriptionsAPIDeleteSubscriptionPathParams = field(default=None)
    query_params: SubscriptionsAPIDeleteSubscriptionQueryParams = field(default=None)
    headers: SubscriptionsAPIDeleteSubscriptionHeaders = field(default=None)
    

@dataclass
class SubscriptionsAPIDeleteSubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

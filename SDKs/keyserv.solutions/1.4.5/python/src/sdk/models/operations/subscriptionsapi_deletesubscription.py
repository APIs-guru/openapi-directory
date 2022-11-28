from dataclasses import dataclass, field



@dataclass
class SubscriptionsAPIDeleteSubscriptionPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscriptionsAPIDeleteSubscriptionQueryParams:
    keep: bool = field(metadata={'query_param': { 'field_name': 'keep', 'style': 'form', 'explode': True }})
    

@dataclass
class SubscriptionsAPIDeleteSubscriptionHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscriptionsAPIDeleteSubscriptionRequest:
    headers: SubscriptionsAPIDeleteSubscriptionHeaders = field()
    path_params: SubscriptionsAPIDeleteSubscriptionPathParams = field()
    query_params: SubscriptionsAPIDeleteSubscriptionQueryParams = field()
    

@dataclass
class SubscriptionsAPIDeleteSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    

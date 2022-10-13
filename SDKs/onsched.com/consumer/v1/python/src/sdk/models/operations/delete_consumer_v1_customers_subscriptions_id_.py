from dataclasses import dataclass, field



@dataclass
class DeleteConsumerV1CustomersSubscriptionsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConsumerV1CustomersSubscriptionsIDRequest:
    path_params: DeleteConsumerV1CustomersSubscriptionsIDPathParams = field(default=None)
    

@dataclass
class DeleteConsumerV1CustomersSubscriptionsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

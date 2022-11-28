from dataclasses import dataclass, field



@dataclass
class DeleteConsumerV1CustomersSubscriptionsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConsumerV1CustomersSubscriptionsIDRequest:
    path_params: DeleteConsumerV1CustomersSubscriptionsIDPathParams = field()
    

@dataclass
class DeleteConsumerV1CustomersSubscriptionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    

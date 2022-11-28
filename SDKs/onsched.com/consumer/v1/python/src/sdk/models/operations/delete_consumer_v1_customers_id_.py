from dataclasses import dataclass, field



@dataclass
class DeleteConsumerV1CustomersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConsumerV1CustomersIDRequest:
    path_params: DeleteConsumerV1CustomersIDPathParams = field()
    

@dataclass
class DeleteConsumerV1CustomersIDResponse:
    content_type: str = field()
    status_code: int = field()
    

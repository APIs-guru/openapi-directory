from dataclasses import dataclass, field



@dataclass
class DeleteConsumerV1CustomersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConsumerV1CustomersIDRequest:
    path_params: DeleteConsumerV1CustomersIDPathParams = field(default=None)
    

@dataclass
class DeleteConsumerV1CustomersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostCustomGatewayPaymentOwnershipIDPathParams:
    ownership_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCustomGatewayPaymentOwnershipIDQueryParams:
    amount: int = field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    developer_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'developerAmount', 'style': 'form', 'explode': True }})
    fee_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'feeAmount', 'style': 'form', 'explode': True }})
    marketplace_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'marketplaceAmount', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomGatewayPaymentOwnershipIDRequest:
    path_params: PostCustomGatewayPaymentOwnershipIDPathParams = field(default=None)
    query_params: PostCustomGatewayPaymentOwnershipIDQueryParams = field(default=None)
    

@dataclass
class PostCustomGatewayPaymentOwnershipIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PostCustomGatewayRefundOwnershipIDPathParams:
    ownership_id: str = field(metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCustomGatewayRefundOwnershipIDQueryParams:
    amount: int = field(metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    date_: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    developer_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'developerAmount', 'style': 'form', 'explode': True }})
    fee_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'feeAmount', 'style': 'form', 'explode': True }})
    marketplace_amount: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'marketplaceAmount', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCustomGatewayRefundOwnershipIDRequest:
    path_params: PostCustomGatewayRefundOwnershipIDPathParams = field()
    query_params: PostCustomGatewayRefundOwnershipIDQueryParams = field()
    

@dataclass
class PostCustomGatewayRefundOwnershipIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

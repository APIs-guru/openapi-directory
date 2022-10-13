from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class SevenGetListOfPaymentsQueryParams:
    date_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    

@dataclass
class SevenGetListOfPaymentsRequest:
    query_params: SevenGetListOfPaymentsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SevenGetListOfPayments200ApplicationJSONData:
    actually_paid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actually_paid' }})
    order_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_description' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    outcome_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome_amount' }})
    outcome_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome_currency' }})
    pay_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pay_address' }})
    pay_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pay_amount' }})
    pay_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pay_currency' }})
    payment_id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    payment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_status' }})
    price_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_amount' }})
    price_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_currency' }})
    purchase_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_id' }})
    

@dataclass_json
@dataclass
class SevenGetListOfPayments200ApplicationJSON:
    data: Optional[List[SevenGetListOfPayments200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    limit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagesCount' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class SevenGetListOfPaymentsResponse:
    seven_get_list_of_payments_200_application_json_object: Optional[SevenGetListOfPayments200ApplicationJSON] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

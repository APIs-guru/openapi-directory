from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetProductsQueryParams:
    producer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'producer_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetProducts200ApplicationJSON:
    products: Optional[list[shared.ProductV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    

@dataclass_json
@dataclass
class GetProducts400ApplicationJSON:
    errors: Optional[list[shared.ErrorV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetProductsRequest:
    query_params: GetProductsQueryParams = field()
    

@dataclass
class GetProductsResponse:
    content_type: str = field()
    status_code: int = field()
    get_products_200_application_json_object: Optional[GetProducts200ApplicationJSON] = field(default=None)
    get_products_400_application_json_object: Optional[GetProducts400ApplicationJSON] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RetrievePrefixPricingPathParams:
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrievePrefixPricingQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    prefix: str = field(metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RetrievePrefixPricing400ApplicationJSONInvalidParameters:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    

@dataclass_json
@dataclass
class RetrievePrefixPricing400ApplicationJSON:
    error_title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_title') }})
    invalid_parameters: RetrievePrefixPricing400ApplicationJSONInvalidParameters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class RetrievePrefixPricing401ApplicationJSON:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    error_code_label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error-code-label') }})
    

@dataclass
class RetrievePrefixPricingRequest:
    path_params: RetrievePrefixPricingPathParams = field()
    query_params: RetrievePrefixPricingQueryParams = field()
    

@dataclass
class RetrievePrefixPricingResponse:
    content_type: str = field()
    status_code: int = field()
    pricing_countries_response: Optional[Any] = field(default=None)
    retrieve_prefix_pricing_400_application_json_object: Optional[RetrievePrefixPricing400ApplicationJSON] = field(default=None)
    retrieve_prefix_pricing_401_application_json_object: Optional[RetrievePrefixPricing401ApplicationJSON] = field(default=None)
    

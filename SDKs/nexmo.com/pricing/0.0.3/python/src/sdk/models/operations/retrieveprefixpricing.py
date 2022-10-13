from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class RetrievePrefixPricingPathParams:
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrievePrefixPricingQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(default=None, metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    prefix: str = field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrievePrefixPricingRequest:
    path_params: RetrievePrefixPricingPathParams = field(default=None)
    query_params: RetrievePrefixPricingQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class RetrievePrefixPricing400ApplicationJSONInvalidParameters:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    

@dataclass_json
@dataclass
class RetrievePrefixPricing400ApplicationJSON:
    error_title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_title' }})
    invalid_parameters: RetrievePrefixPricing400ApplicationJSONInvalidParameters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_parameters' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrievePrefixPricing401ApplicationJSON:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    error_code_label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error-code-label' }})
    

@dataclass
class RetrievePrefixPricingResponse:
    content_type: str = field(default=None)
    pricing_countries_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    retrieve_prefix_pricing_400_application_json_object: Optional[RetrievePrefixPricing400ApplicationJSON] = field(default=None)
    retrieve_prefix_pricing_401_application_json_object: Optional[RetrievePrefixPricing401ApplicationJSON] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class RetrievePricingCountryPathParams:
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrievePricingCountryQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(default=None, metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    country: str = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrievePricingCountryRequest:
    path_params: RetrievePricingCountryPathParams = field(default=None)
    query_params: RetrievePricingCountryQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class RetrievePricingCountry400ApplicationJSONInvalidParameters:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    

@dataclass_json
@dataclass
class RetrievePricingCountry400ApplicationJSON:
    error_title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_title' }})
    invalid_parameters: RetrievePricingCountry400ApplicationJSONInvalidParameters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_parameters' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class RetrievePricingCountry401ApplicationJSON:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    error_code_label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error-code-label' }})
    

@dataclass
class RetrievePricingCountryResponse:
    content_type: str = field(default=None)
    pricing_country_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    retrieve_pricing_country_400_application_json_object: Optional[RetrievePricingCountry400ApplicationJSON] = field(default=None)
    retrieve_pricing_country_401_application_json_object: Optional[RetrievePricingCountry401ApplicationJSON] = field(default=None)
    

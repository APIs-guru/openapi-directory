from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RetrievePricingCountryPathParams:
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrievePricingCountryQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    country: str = field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RetrievePricingCountry400ApplicationJSONInvalidParameters:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    

@dataclass_json
@dataclass
class RetrievePricingCountry400ApplicationJSON:
    error_title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_title') }})
    invalid_parameters: RetrievePricingCountry400ApplicationJSONInvalidParameters = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_parameters') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class RetrievePricingCountry401ApplicationJSON:
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    error_code_label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error-code-label') }})
    

@dataclass
class RetrievePricingCountryRequest:
    path_params: RetrievePricingCountryPathParams = field()
    query_params: RetrievePricingCountryQueryParams = field()
    

@dataclass
class RetrievePricingCountryResponse:
    content_type: str = field()
    status_code: int = field()
    pricing_country_response: Optional[Any] = field(default=None)
    retrieve_pricing_country_400_application_json_object: Optional[RetrievePricingCountry400ApplicationJSON] = field(default=None)
    retrieve_pricing_country_401_application_json_object: Optional[RetrievePricingCountry401ApplicationJSON] = field(default=None)
    

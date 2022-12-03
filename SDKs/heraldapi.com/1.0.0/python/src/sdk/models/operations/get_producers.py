from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetProducersQueryParams:
    external_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'external_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetProducers200ApplicationJSON:
    producers: Optional[list[shared.ProducerV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producers') }})
    

@dataclass
class GetProducersRequest:
    query_params: GetProducersQueryParams = field()
    

@dataclass
class GetProducersResponse:
    content_type: str = field()
    status_code: int = field()
    get_producers_200_application_json_object: Optional[GetProducers200ApplicationJSON] = field(default=None)
    

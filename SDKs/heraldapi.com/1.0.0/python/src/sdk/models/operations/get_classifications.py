from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetClassificationsQueryParams:
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    naics_2017: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'naics_2017', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetClassifications200ApplicationJSON:
    classifications: Optional[list[shared.ClassificationV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifications') }})
    

@dataclass_json
@dataclass
class GetClassifications400ApplicationJSON:
    errors: Optional[list[shared.ErrorV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetClassificationsRequest:
    query_params: GetClassificationsQueryParams = field()
    

@dataclass
class GetClassificationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_classifications_200_application_json_object: Optional[GetClassifications200ApplicationJSON] = field(default=None)
    get_classifications_400_application_json_object: Optional[GetClassifications400ApplicationJSON] = field(default=None)
    

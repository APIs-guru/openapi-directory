from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetareacodefromnumberQueryParams:
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    number: str = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Getareacodefromnumber200ApplicationJSON:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Abbreviation') }})
    area_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AreaCode') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locale') }})
    primary_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryCity') }})
    

@dataclass
class GetareacodefromnumberRequest:
    query_params: GetareacodefromnumberQueryParams = field()
    

@dataclass
class GetareacodefromnumberResponse:
    content_type: str = field()
    status_code: int = field()
    getareacodefromnumber_200_application_json_object: Optional[Getareacodefromnumber200ApplicationJSON] = field(default=None)
    

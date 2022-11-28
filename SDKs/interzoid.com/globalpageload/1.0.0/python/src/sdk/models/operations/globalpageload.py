from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GlobalpageloadQueryParams:
    license: str = field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    origin: str = field(metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class Globalpageload200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Contents') }})
    credits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Origin') }})
    page_response_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageResponseStatus') }})
    seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Seconds') }})
    

@dataclass
class GlobalpageloadRequest:
    query_params: GlobalpageloadQueryParams = field()
    

@dataclass
class GlobalpageloadResponse:
    content_type: str = field()
    status_code: int = field()
    globalpageload_200_application_json_object: Optional[Globalpageload200ApplicationJSON] = field(default=None)
    

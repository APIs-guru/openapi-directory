from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetTrackingSnippetQueryParams:
    domain: str = field(metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet200ApplicationJSONData:
    r"""GetTrackingSnippet200ApplicationJSONData
    A snippet
    """
    
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    snippet: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet200ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet200ApplicationJSON:
    data: GetTrackingSnippet200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: GetTrackingSnippet200ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet400ApplicationJSONErrorsParameters:
    r"""GetTrackingSnippet400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet400ApplicationJSONErrors:
    r"""GetTrackingSnippet400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[GetTrackingSnippet400ApplicationJSONErrorsParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet400ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet400ApplicationJSON:
    errors: GetTrackingSnippet400ApplicationJSONErrors = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet400ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet401ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet401ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet401ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet403ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet403ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet403ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet404ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet404ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet404ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet429ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet429ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet429ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet500ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetTrackingSnippet500ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: GetTrackingSnippet500ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetTrackingSnippetRequest:
    query_params: GetTrackingSnippetQueryParams = field()
    

@dataclass
class GetTrackingSnippetResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_tracking_snippet_200_application_json_object: Optional[GetTrackingSnippet200ApplicationJSON] = field(default=None)
    get_tracking_snippet_400_application_json_object: Optional[GetTrackingSnippet400ApplicationJSON] = field(default=None)
    get_tracking_snippet_401_application_json_object: Optional[GetTrackingSnippet401ApplicationJSON] = field(default=None)
    get_tracking_snippet_403_application_json_object: Optional[GetTrackingSnippet403ApplicationJSON] = field(default=None)
    get_tracking_snippet_404_application_json_object: Optional[GetTrackingSnippet404ApplicationJSON] = field(default=None)
    get_tracking_snippet_429_application_json_object: Optional[GetTrackingSnippet429ApplicationJSON] = field(default=None)
    get_tracking_snippet_500_application_json_object: Optional[GetTrackingSnippet500ApplicationJSON] = field(default=None)
    

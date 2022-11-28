from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPRequestContext:
    r"""HTTPRequestContext
    HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
    """
    
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    referrer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrer') }})
    remote_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteIp') }})
    response_status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseStatusCode') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    

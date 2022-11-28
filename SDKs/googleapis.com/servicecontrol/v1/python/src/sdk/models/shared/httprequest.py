from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPRequest:
    r"""HTTPRequest
    A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
    """
    
    cache_fill_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheFillBytes') }})
    cache_hit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheHit') }})
    cache_lookup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheLookup') }})
    cache_validated_with_origin_server: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cacheValidatedWithOriginServer') }})
    latency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latency') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    referer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referer') }})
    remote_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteIp') }})
    request_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMethod') }})
    request_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestSize') }})
    request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestUrl') }})
    response_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseSize') }})
    server_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverIp') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    

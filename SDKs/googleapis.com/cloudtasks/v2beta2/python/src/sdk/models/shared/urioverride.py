from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class URIOverrideSchemeEnum(str, Enum):
    SCHEME_UNSPECIFIED = "SCHEME_UNSPECIFIED"
    HTTP = "HTTP"
    HTTPS = "HTTPS"

class URIOverrideURIOverrideEnforceModeEnum(str, Enum):
    URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED = "URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED"
    IF_NOT_EXISTS = "IF_NOT_EXISTS"
    ALWAYS = "ALWAYS"


@dataclass_json
@dataclass
class URIOverride:
    r"""URIOverride
    Uri Override. When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
    """
    
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    scheme: Optional[URIOverrideSchemeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    uri_override_enforce_mode: Optional[URIOverrideURIOverrideEnforceModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uriOverrideEnforceMode') }})
    

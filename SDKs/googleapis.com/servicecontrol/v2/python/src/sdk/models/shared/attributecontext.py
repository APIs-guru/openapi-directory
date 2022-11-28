from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttributeContext:
    r"""AttributeContext
    This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.
    """
    
    api: Optional[API] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    destination: Optional[Peer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    extensions: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extensions') }})
    origin: Optional[Peer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    request: Optional[Request] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    response: Optional[Response] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    source: Optional[Peer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

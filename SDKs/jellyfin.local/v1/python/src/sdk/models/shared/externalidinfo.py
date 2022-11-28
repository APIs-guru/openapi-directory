from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExternalIDInfo:
    r"""ExternalIDInfo
    Represents the external id information for serialization to the client.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    type: Optional[ExternalIDMediaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    url_format_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UrlFormatString') }})
    

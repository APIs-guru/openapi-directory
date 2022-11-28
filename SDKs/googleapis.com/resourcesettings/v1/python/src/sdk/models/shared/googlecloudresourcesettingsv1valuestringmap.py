from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudResourcesettingsV1ValueStringMap:
    r"""GoogleCloudResourcesettingsV1ValueStringMap
    A string->string map value that can hold a map of string keys to string values. The maximum length of each string is 200 characters and there can be a maximum of 50 key-value pairs in the map.
    """
    
    mappings: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappings') }})
    

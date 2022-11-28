from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1ConfigVariable:
    r"""GoogleCloudConnectorsV1ConfigVariable
    ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
    """
    
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    secret_value: Optional[GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    

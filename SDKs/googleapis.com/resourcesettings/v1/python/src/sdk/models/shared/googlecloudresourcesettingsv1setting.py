from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudResourcesettingsV1Setting:
    r"""GoogleCloudResourcesettingsV1Setting
    The schema for settings.
    """
    
    effective_value: Optional[GoogleCloudResourcesettingsV1Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveValue') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    local_value: Optional[GoogleCloudResourcesettingsV1Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localValue') }})
    metadata: Optional[GoogleCloudResourcesettingsV1SettingMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

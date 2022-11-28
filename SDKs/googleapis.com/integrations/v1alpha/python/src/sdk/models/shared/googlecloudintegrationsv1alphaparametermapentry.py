from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaParameterMapEntry:
    r"""GoogleCloudIntegrationsV1alphaParameterMapEntry
    Entry is a pair of key and value.
    """
    
    key: Optional[GoogleCloudIntegrationsV1alphaParameterMapField] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[GoogleCloudIntegrationsV1alphaParameterMapField] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

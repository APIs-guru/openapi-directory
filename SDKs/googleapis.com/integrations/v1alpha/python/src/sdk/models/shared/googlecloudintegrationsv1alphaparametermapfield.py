from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaParameterMapField:
    r"""GoogleCloudIntegrationsV1alphaParameterMapField
    Field represents either the key or value in an entry.
    """
    
    literal_value: Optional[GoogleCloudIntegrationsV1alphaValueType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('literalValue') }})
    reference_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceKey') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaEventParameter:
    r"""GoogleCloudIntegrationsV1alphaEventParameter
    This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[GoogleCloudIntegrationsV1alphaValueType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

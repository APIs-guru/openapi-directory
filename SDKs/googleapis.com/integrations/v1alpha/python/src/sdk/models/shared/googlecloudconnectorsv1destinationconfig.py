from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1DestinationConfig:
    r"""GoogleCloudConnectorsV1DestinationConfig
    Define the Connectors target endpoint.
    """
    
    destinations: Optional[List[GoogleCloudConnectorsV1Destination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    

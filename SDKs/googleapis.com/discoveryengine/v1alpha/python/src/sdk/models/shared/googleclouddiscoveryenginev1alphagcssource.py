from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaGcsSource:
    r"""GoogleCloudDiscoveryengineV1alphaGcsSource
    Google Cloud Storage location for input content. format.
    """
    
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSchema') }})
    input_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUris') }})
    

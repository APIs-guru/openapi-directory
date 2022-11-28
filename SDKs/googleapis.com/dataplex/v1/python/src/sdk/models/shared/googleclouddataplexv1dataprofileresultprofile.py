from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataProfileResultProfile:
    r"""GoogleCloudDataplexV1DataProfileResultProfile
    Profile information describing the structure and layout of the data and contains the profile info.
    """
    
    fields: Optional[List[GoogleCloudDataplexV1DataProfileResultProfileField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ListStudiesResponse:
    studies: Optional[List[GoogleCloudMlV1Study]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studies') }})
    

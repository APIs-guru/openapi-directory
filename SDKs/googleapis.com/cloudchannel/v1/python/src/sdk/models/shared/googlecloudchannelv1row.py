from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1Row:
    r"""GoogleCloudChannelV1Row
    A row of report values.
    """
    
    values: Optional[List[GoogleCloudChannelV1ReportValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

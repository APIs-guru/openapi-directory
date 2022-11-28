from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaUserEventInputConfigInput:
    r"""GoogleCloudRetailV2betaUserEventInputConfigInput
    The input config source for user events.
    """
    
    big_query_source: Optional[GoogleCloudRetailV2betaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQuerySource') }})
    gcs_source: Optional[GoogleCloudRetailV2betaGcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    user_event_inline_source: Optional[GoogleCloudRetailV2betaUserEventInlineSourceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEventInlineSource') }})
    

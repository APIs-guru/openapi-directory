from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2UserEventInputConfigInput:
    r"""GoogleCloudRetailV2UserEventInputConfigInput
    The input config source for user events.
    """
    
    big_query_source: Optional[GoogleCloudRetailV2BigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQuerySource') }})
    gcs_source: Optional[GoogleCloudRetailV2GcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    user_event_inline_source: Optional[GoogleCloudRetailV2UserEventInlineSourceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEventInlineSource') }})
    

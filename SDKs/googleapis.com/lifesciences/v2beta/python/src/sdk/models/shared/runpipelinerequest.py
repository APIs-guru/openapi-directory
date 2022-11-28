from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunPipelineRequest:
    r"""RunPipelineRequest
    The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail.
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pipeline: Optional[Pipeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipeline') }})
    pub_sub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubSubTopic') }})
    

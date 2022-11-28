from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2ImportCompletionDataRequest:
    r"""GoogleCloudRetailV2ImportCompletionDataRequest
    Request message for ImportCompletionData methods.
    """
    
    input_config: Optional[GoogleCloudRetailV2CompletionDataInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationPubsubTopic') }})
    

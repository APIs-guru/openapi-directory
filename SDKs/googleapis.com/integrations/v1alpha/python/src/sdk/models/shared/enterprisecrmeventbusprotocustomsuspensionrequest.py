from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoCustomSuspensionRequest:
    post_to_queue_with_trigger_id_request: Optional[GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIDRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postToQueueWithTriggerIdRequest') }})
    suspension_info_event_parameter_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionInfoEventParameterKey') }})
    

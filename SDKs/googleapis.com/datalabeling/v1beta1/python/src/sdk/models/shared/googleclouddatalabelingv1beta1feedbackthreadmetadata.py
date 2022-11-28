from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum(str, Enum):
    FEEDBACK_THREAD_STATUS_UNSPECIFIED = "FEEDBACK_THREAD_STATUS_UNSPECIFIED"
    NEW = "NEW"
    REPLIED = "REPLIED"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime') }})
    status: Optional[GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    

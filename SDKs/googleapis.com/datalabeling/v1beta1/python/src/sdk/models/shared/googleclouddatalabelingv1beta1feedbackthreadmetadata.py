from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum(str, Enum):
    FEEDBACK_THREAD_STATUS_UNSPECIFIED = "FEEDBACK_THREAD_STATUS_UNSPECIFIED"
    NEW = "NEW"
    REPLIED = "REPLIED"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    status: Optional[GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    

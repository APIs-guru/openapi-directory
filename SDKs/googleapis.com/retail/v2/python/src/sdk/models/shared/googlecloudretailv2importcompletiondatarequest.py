from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2completiondatainputconfig


@dataclass_json
@dataclass
class GoogleCloudRetailV2ImportCompletionDataRequest:
    input_config: Optional[googlecloudretailv2completiondatainputconfig.GoogleCloudRetailV2CompletionDataInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationPubsubTopic' }})
    

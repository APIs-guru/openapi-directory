from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacompletiondatainputconfig


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaImportCompletionDataRequest:
    input_config: Optional[googlecloudretailv2betacompletiondatainputconfig.GoogleCloudRetailV2betaCompletionDataInputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationPubsubTopic' }})
    

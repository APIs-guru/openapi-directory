from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import urlnotificationmetadata


@dataclass_json
@dataclass
class PublishURLNotificationResponse:
    url_notification_metadata: Optional[urlnotificationmetadata.URLNotificationMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlNotificationMetadata' }})
    

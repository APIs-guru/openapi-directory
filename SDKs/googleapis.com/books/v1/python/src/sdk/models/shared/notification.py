from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Notification:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    crm_experiment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crmExperimentIds' }})
    doc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doc_id' }})
    doc_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doc_type' }})
    dont_show_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dont_show_notification' }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconUrl' }})
    is_document_mature: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_document_mature' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    notification_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationGroup' }})
    notification_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification_type' }})
    pcampaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pcampaign_id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    show_notification_settings_action: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_notification_settings_action' }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetUrl' }})
    time_to_expire_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeToExpireMs' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

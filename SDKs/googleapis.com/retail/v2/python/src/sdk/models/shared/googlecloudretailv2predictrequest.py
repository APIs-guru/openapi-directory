from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2userevent


@dataclass_json
@dataclass
class GoogleCloudRetailV2PredictRequest:
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    user_event: Optional[googlecloudretailv2userevent.GoogleCloudRetailV2UserEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEvent' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    

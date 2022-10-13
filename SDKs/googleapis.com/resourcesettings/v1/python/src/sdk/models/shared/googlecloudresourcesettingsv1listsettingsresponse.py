from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudresourcesettingsv1setting


@dataclass_json
@dataclass
class GoogleCloudResourcesettingsV1ListSettingsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    settings: Optional[List[googlecloudresourcesettingsv1setting.GoogleCloudResourcesettingsV1Setting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

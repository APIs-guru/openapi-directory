from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphavaluetype


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaEventParameter:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[googlecloudintegrationsv1alphavaluetype.GoogleCloudIntegrationsV1alphaValueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

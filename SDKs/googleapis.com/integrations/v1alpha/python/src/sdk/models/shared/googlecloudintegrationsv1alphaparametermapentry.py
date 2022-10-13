from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaparametermapfield
from . import googlecloudintegrationsv1alphaparametermapfield


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaParameterMapEntry:
    key: Optional[googlecloudintegrationsv1alphaparametermapfield.GoogleCloudIntegrationsV1alphaParameterMapField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: Optional[googlecloudintegrationsv1alphaparametermapfield.GoogleCloudIntegrationsV1alphaParameterMapField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

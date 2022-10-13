from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphavaluetype


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaParameterMapField:
    literal_value: Optional[googlecloudintegrationsv1alphavaluetype.GoogleCloudIntegrationsV1alphaValueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'literalValue' }})
    reference_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceKey' }})
    

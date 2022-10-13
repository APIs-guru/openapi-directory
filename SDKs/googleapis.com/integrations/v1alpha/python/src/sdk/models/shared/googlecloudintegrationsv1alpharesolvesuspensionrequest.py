from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphasuspension


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaResolveSuspensionRequest:
    suspension: Optional[googlecloudintegrationsv1alphasuspension.GoogleCloudIntegrationsV1alphaSuspension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspension' }})
    

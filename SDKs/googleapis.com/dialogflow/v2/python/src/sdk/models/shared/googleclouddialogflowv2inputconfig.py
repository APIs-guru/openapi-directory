from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2gcssources


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2InputConfig:
    gcs_source: Optional[googleclouddialogflowv2gcssources.GoogleCloudDialogflowV2GcsSources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    

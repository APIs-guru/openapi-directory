from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3versionvariants


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3VariantsHistory:
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version_variants: Optional[googleclouddialogflowcxv3versionvariants.GoogleCloudDialogflowCxV3VersionVariants] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionVariants' }})
    

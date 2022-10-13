from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1versionvariants


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1VariantsHistory:
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version_variants: Optional[googleclouddialogflowcxv3beta1versionvariants.GoogleCloudDialogflowCxV3beta1VersionVariants] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionVariants' }})
    

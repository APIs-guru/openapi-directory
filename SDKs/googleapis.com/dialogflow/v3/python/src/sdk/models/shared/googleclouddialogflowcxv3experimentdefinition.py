from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3versionvariants


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ExperimentDefinition:
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    version_variants: Optional[googleclouddialogflowcxv3versionvariants.GoogleCloudDialogflowCxV3VersionVariants] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionVariants' }})
    

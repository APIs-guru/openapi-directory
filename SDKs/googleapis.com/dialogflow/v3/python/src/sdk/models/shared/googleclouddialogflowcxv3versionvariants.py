from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3versionvariantsvariant


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3VersionVariants:
    variants: Optional[List[googleclouddialogflowcxv3versionvariantsvariant.GoogleCloudDialogflowCxV3VersionVariantsVariant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variants' }})
    

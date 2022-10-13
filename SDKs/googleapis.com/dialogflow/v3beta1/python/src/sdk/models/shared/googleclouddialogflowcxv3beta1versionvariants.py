from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1versionvariantsvariant


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1VersionVariants:
    variants: Optional[List[googleclouddialogflowcxv3beta1versionvariantsvariant.GoogleCloudDialogflowCxV3beta1VersionVariantsVariant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variants' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3processortypelocationinfo

class GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum(str, Enum):
    LAUNCH_STAGE_UNSPECIFIED = "LAUNCH_STAGE_UNSPECIFIED"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    PRELAUNCH = "PRELAUNCH"
    EARLY_ACCESS = "EARLY_ACCESS"
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ProcessorType:
    allow_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCreation' }})
    available_locations: Optional[List[googleclouddocumentaiv1beta3processortypelocationinfo.GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableLocations' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    launch_stage: Optional[GoogleCloudDocumentaiV1beta3ProcessorTypeLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

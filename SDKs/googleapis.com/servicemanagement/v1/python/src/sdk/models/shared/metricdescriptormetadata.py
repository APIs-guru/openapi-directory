from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MetricDescriptorMetadataLaunchStageEnum(str, Enum):
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
class MetricDescriptorMetadata:
    ingest_delay: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingestDelay' }})
    launch_stage: Optional[MetricDescriptorMetadataLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launchStage' }})
    sample_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplePeriod' }})
    

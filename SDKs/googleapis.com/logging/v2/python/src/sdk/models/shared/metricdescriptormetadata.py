from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""MetricDescriptorMetadata
    Additional annotations that can be used to guide the usage of a metric.
    """
    
    ingest_delay: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingestDelay') }})
    launch_stage: Optional[MetricDescriptorMetadataLaunchStageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchStage') }})
    sample_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplePeriod') }})
    

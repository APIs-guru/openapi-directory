from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum(str, Enum):
    VIDEO_DURATION_UNSPECIFIED = "VIDEO_DURATION_UNSPECIFIED"
    VIDEO_DURATION_SECONDS_NONE = "VIDEO_DURATION_SECONDS_NONE"
    VIDEO_DURATION_SECONDS_0 = "VIDEO_DURATION_SECONDS_0"
    VIDEO_DURATION_SECONDS_1 = "VIDEO_DURATION_SECONDS_1"
    VIDEO_DURATION_SECONDS_2 = "VIDEO_DURATION_SECONDS_2"
    VIDEO_DURATION_SECONDS_3 = "VIDEO_DURATION_SECONDS_3"
    VIDEO_DURATION_SECONDS_4 = "VIDEO_DURATION_SECONDS_4"
    VIDEO_DURATION_SECONDS_5 = "VIDEO_DURATION_SECONDS_5"
    VIDEO_DURATION_SECONDS_6 = "VIDEO_DURATION_SECONDS_6"
    VIDEO_DURATION_SECONDS_7 = "VIDEO_DURATION_SECONDS_7"
    VIDEO_DURATION_SECONDS_8 = "VIDEO_DURATION_SECONDS_8"
    VIDEO_DURATION_SECONDS_9 = "VIDEO_DURATION_SECONDS_9"
    VIDEO_DURATION_SECONDS_10 = "VIDEO_DURATION_SECONDS_10"
    VIDEO_DURATION_SECONDS_11 = "VIDEO_DURATION_SECONDS_11"
    VIDEO_DURATION_SECONDS_12 = "VIDEO_DURATION_SECONDS_12"
    VIDEO_DURATION_SECONDS_13 = "VIDEO_DURATION_SECONDS_13"
    VIDEO_DURATION_SECONDS_14 = "VIDEO_DURATION_SECONDS_14"
    VIDEO_DURATION_SECONDS_15 = "VIDEO_DURATION_SECONDS_15"
    VIDEO_DURATION_SECONDS_30 = "VIDEO_DURATION_SECONDS_30"
    VIDEO_DURATION_SECONDS_45 = "VIDEO_DURATION_SECONDS_45"
    VIDEO_DURATION_SECONDS_60 = "VIDEO_DURATION_SECONDS_60"

class ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum(str, Enum):
    VIDEO_DURATION_QUARTILE_UNSPECIFIED = "VIDEO_DURATION_QUARTILE_UNSPECIFIED"
    VIDEO_DURATION_QUARTILE_NONE = "VIDEO_DURATION_QUARTILE_NONE"
    VIDEO_DURATION_QUARTILE_FIRST = "VIDEO_DURATION_QUARTILE_FIRST"
    VIDEO_DURATION_QUARTILE_SECOND = "VIDEO_DURATION_QUARTILE_SECOND"
    VIDEO_DURATION_QUARTILE_THIRD = "VIDEO_DURATION_QUARTILE_THIRD"
    VIDEO_DURATION_QUARTILE_FOURTH = "VIDEO_DURATION_QUARTILE_FOURTH"

class ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum(str, Enum):
    VIEWABILITY_PERCENT_UNSPECIFIED = "VIEWABILITY_PERCENT_UNSPECIFIED"
    VIEWABILITY_PERCENT_0 = "VIEWABILITY_PERCENT_0"
    VIEWABILITY_PERCENT_25 = "VIEWABILITY_PERCENT_25"
    VIEWABILITY_PERCENT_50 = "VIEWABILITY_PERCENT_50"
    VIEWABILITY_PERCENT_75 = "VIEWABILITY_PERCENT_75"
    VIEWABILITY_PERCENT_100 = "VIEWABILITY_PERCENT_100"

class ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum(str, Enum):
    VIDEO_VOLUME_PERCENT_UNSPECIFIED = "VIDEO_VOLUME_PERCENT_UNSPECIFIED"
    VIDEO_VOLUME_PERCENT_0 = "VIDEO_VOLUME_PERCENT_0"
    VIDEO_VOLUME_PERCENT_10 = "VIDEO_VOLUME_PERCENT_10"


@dataclass_json
@dataclass
class ActiveViewVideoViewabilityMetricConfig:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    minimum_duration: Optional[ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumDuration' }})
    minimum_quartile: Optional[ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumQuartile' }})
    minimum_viewability: Optional[ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumViewability' }})
    minimum_volume: Optional[ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumVolume' }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BasicPerfSampleSeriesPerfMetricTypeEnum(str, Enum):
    PERF_METRIC_TYPE_UNSPECIFIED = "perfMetricTypeUnspecified"
    MEMORY = "memory"
    CPU = "cpu"
    NETWORK = "network"
    GRAPHICS = "graphics"

class BasicPerfSampleSeriesPerfUnitEnum(str, Enum):
    PERF_UNIT_UNSPECIFIED = "perfUnitUnspecified"
    KIBIBYTE = "kibibyte"
    PERCENT = "percent"
    BYTES_PER_SECOND = "bytesPerSecond"
    FRAMES_PER_SECOND = "framesPerSecond"
    BYTE = "byte"

class BasicPerfSampleSeriesSampleSeriesLabelEnum(str, Enum):
    SAMPLE_SERIES_TYPE_UNSPECIFIED = "sampleSeriesTypeUnspecified"
    MEMORY_RSS_PRIVATE = "memoryRssPrivate"
    MEMORY_RSS_SHARED = "memoryRssShared"
    MEMORY_RSS_TOTAL = "memoryRssTotal"
    MEMORY_TOTAL = "memoryTotal"
    CPU_USER = "cpuUser"
    CPU_KERNEL = "cpuKernel"
    CPU_TOTAL = "cpuTotal"
    NT_BYTES_TRANSFERRED = "ntBytesTransferred"
    NT_BYTES_RECEIVED = "ntBytesReceived"
    NETWORK_SENT = "networkSent"
    NETWORK_RECEIVED = "networkReceived"
    GRAPHICS_FRAME_RATE = "graphicsFrameRate"


@dataclass_json
@dataclass
class BasicPerfSampleSeries:
    r"""BasicPerfSampleSeries
    Encapsulates the metadata for basic sample series represented by a line chart
    """
    
    perf_metric_type: Optional[BasicPerfSampleSeriesPerfMetricTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfMetricType') }})
    perf_unit: Optional[BasicPerfSampleSeriesPerfUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perfUnit') }})
    sample_series_label: Optional[BasicPerfSampleSeriesSampleSeriesLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleSeriesLabel') }})
    

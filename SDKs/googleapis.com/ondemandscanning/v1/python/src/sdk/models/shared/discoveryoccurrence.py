from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DiscoveryOccurrenceAnalysisStatusEnum(str, Enum):
    ANALYSIS_STATUS_UNSPECIFIED = "ANALYSIS_STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    SCANNING = "SCANNING"
    FINISHED_SUCCESS = "FINISHED_SUCCESS"
    COMPLETE = "COMPLETE"
    FINISHED_FAILED = "FINISHED_FAILED"
    FINISHED_UNSUPPORTED = "FINISHED_UNSUPPORTED"

class DiscoveryOccurrenceContinuousAnalysisEnum(str, Enum):
    CONTINUOUS_ANALYSIS_UNSPECIFIED = "CONTINUOUS_ANALYSIS_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class DiscoveryOccurrence:
    r"""DiscoveryOccurrence
    Provides information about the analysis status of a discovered resource.
    """
    
    analysis_completed: Optional[AnalysisCompleted] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisCompleted') }})
    analysis_error: Optional[List[Status]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisError') }})
    analysis_status: Optional[DiscoveryOccurrenceAnalysisStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisStatus') }})
    analysis_status_error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisStatusError') }})
    archive_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveTime') }})
    continuous_analysis: Optional[DiscoveryOccurrenceContinuousAnalysisEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continuousAnalysis') }})
    cpe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpe') }})
    last_scan_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastScanTime') }})
    

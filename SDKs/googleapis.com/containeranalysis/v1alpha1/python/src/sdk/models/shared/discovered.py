from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import analysiscompleted
from . import status
from . import status
from . import operation

class DiscoveredAnalysisStatusEnum(str, Enum):
    ANALYSIS_STATUS_UNSPECIFIED = "ANALYSIS_STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    SCANNING = "SCANNING"
    COMPLETE = "COMPLETE"
    FINISHED_SUCCESS = "FINISHED_SUCCESS"
    FINISHED_FAILED = "FINISHED_FAILED"
    FINISHED_UNSUPPORTED = "FINISHED_UNSUPPORTED"

class DiscoveredContinuousAnalysisEnum(str, Enum):
    CONTINUOUS_ANALYSIS_UNSPECIFIED = "CONTINUOUS_ANALYSIS_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class Discovered:
    analysis_completed: Optional[analysiscompleted.AnalysisCompleted] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisCompleted' }})
    analysis_error: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisError' }})
    analysis_status: Optional[DiscoveredAnalysisStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisStatus' }})
    analysis_status_error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisStatusError' }})
    archive_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveTime' }})
    continuous_analysis: Optional[DiscoveredContinuousAnalysisEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuousAnalysis' }})
    cpe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpe' }})
    last_scan_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastScanTime' }})
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1analysisresultcallanalysismetadata


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1AnalysisResult:
    call_analysis_metadata: Optional[googlecloudcontactcenterinsightsv1analysisresultcallanalysismetadata.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callAnalysisMetadata' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    

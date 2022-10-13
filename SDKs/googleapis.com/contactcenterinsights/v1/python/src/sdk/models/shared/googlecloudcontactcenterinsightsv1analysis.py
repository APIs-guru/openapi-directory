from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1analysisresult


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1Analysis:
    analysis_result: Optional[googlecloudcontactcenterinsightsv1analysisresult.GoogleCloudContactcenterinsightsV1AnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisResult' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    request_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestTime' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicemeshanalysismessage


@dataclass_json
@dataclass
class ServiceMeshFeatureState:
    analysis_messages: Optional[List[servicemeshanalysismessage.ServiceMeshAnalysisMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisMessages' }})
    

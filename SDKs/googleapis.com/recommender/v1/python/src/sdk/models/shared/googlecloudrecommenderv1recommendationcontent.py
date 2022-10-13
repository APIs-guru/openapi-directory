from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1operationgroup


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1RecommendationContent:
    operation_groups: Optional[List[googlecloudrecommenderv1operationgroup.GoogleCloudRecommenderV1OperationGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationGroups' }})
    overview: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overview' }})
    

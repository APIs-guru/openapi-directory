from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1operation


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1OperationGroup:
    operations: Optional[List[googlecloudrecommenderv1operation.GoogleCloudRecommenderV1Operation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    

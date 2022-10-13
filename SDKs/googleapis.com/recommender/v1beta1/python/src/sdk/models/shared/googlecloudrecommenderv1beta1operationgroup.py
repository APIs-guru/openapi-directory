from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1beta1operation


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1OperationGroup:
    operations: Optional[List[googlecloudrecommenderv1beta1operation.GoogleCloudRecommenderV1beta1Operation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1row


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ConfusionMatrix:
    row: Optional[List[googleclouddatalabelingv1beta1row.GoogleCloudDatalabelingV1beta1Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1dataset


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1CreateDatasetRequest:
    dataset: Optional[googleclouddatalabelingv1beta1dataset.GoogleCloudDatalabelingV1beta1Dataset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataset' }})
    

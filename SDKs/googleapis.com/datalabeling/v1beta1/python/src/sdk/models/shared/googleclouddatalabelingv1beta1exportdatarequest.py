from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1outputconfig


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ExportDataRequest:
    annotated_dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotatedDataset' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    output_config: Optional[googleclouddatalabelingv1beta1outputconfig.GoogleCloudDatalabelingV1beta1OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    user_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEmailAddress' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1gcsdestination
from . import googleclouddatalabelingv1beta1gcsfolderdestination


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1OutputConfig:
    gcs_destination: Optional[googleclouddatalabelingv1beta1gcsdestination.GoogleCloudDatalabelingV1beta1GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    gcs_folder_destination: Optional[googleclouddatalabelingv1beta1gcsfolderdestination.GoogleCloudDatalabelingV1beta1GcsFolderDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsFolderDestination' }})
    

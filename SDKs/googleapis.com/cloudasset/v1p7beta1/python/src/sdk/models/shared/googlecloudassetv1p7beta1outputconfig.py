from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudassetv1p7beta1bigquerydestination
from . import googlecloudassetv1p7beta1gcsdestination


@dataclass_json
@dataclass
class GoogleCloudAssetV1p7beta1OutputConfig:
    bigquery_destination: Optional[googlecloudassetv1p7beta1bigquerydestination.GoogleCloudAssetV1p7beta1BigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDestination' }})
    gcs_destination: Optional[googlecloudassetv1p7beta1gcsdestination.GoogleCloudAssetV1p7beta1GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    

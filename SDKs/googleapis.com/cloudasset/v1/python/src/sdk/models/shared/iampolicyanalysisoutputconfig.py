from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudassetv1bigquerydestination
from . import googlecloudassetv1gcsdestination


@dataclass_json
@dataclass
class IamPolicyAnalysisOutputConfig:
    bigquery_destination: Optional[googlecloudassetv1bigquerydestination.GoogleCloudAssetV1BigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryDestination' }})
    gcs_destination: Optional[googlecloudassetv1gcsdestination.GoogleCloudAssetV1GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    

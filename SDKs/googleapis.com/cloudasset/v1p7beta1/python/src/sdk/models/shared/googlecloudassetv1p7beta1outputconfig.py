from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssetV1p7beta1OutputConfig:
    r"""GoogleCloudAssetV1p7beta1OutputConfig
    Output configuration for export assets destination.
    """
    
    bigquery_destination: Optional[GoogleCloudAssetV1p7beta1BigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestination') }})
    gcs_destination: Optional[GoogleCloudAssetV1p7beta1GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    

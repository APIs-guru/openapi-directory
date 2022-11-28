from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IamPolicyAnalysisOutputConfig:
    r"""IamPolicyAnalysisOutputConfig
    Output configuration for export IAM policy analysis destination.
    """
    
    bigquery_destination: Optional[GoogleCloudAssetV1BigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestination') }})
    gcs_destination: Optional[GoogleCloudAssetV1GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    

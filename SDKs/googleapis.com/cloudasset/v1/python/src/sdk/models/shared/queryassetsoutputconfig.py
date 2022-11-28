from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryAssetsOutputConfig:
    r"""QueryAssetsOutputConfig
    Output configuration query assets.
    """
    
    bigquery_destination: Optional[GoogleCloudAssetV1QueryAssetsOutputConfigBigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestination') }})
    

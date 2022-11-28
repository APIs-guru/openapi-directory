from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutputConfig:
    r"""OutputConfig
    Output configuration for export assets destination.
    """
    
    bigquery_destination: Optional[BigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestination') }})
    gcs_destination: Optional[GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    

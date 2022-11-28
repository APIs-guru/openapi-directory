from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BigQueryDestination:
    r"""BigQueryDestination
    Parameters for using BigQuery as the destination of resource usage export.
    """
    
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetId') }})
    

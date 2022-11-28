from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1BigQuerySource:
    r"""GoogleCloudDatalabelingV1beta1BigQuerySource
    The BigQuery location for input data. If used in an EvaluationJob, this is where the service saves the prediction input and output sampled from the model version.
    """
    
    input_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUri') }})
    

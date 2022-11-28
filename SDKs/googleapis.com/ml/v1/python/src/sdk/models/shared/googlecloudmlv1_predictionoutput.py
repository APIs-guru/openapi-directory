from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1PredictionOutput:
    r"""GoogleCloudMlV1PredictionOutput
    Represents results of a prediction job.
    """
    
    error_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCount') }})
    node_hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeHours') }})
    output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputPath') }})
    prediction_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionCount') }})
    

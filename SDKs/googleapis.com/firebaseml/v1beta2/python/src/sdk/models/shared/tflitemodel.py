from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TfLiteModel:
    r"""TfLiteModel
    Information that is specific to TfLite models.
    """
    
    automl_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automlModel') }})
    gcs_tflite_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsTfliteUri') }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeBytes') }})
    

@dataclass_json
@dataclass
class TfLiteModelInput:
    r"""TfLiteModelInput
    Information that is specific to TfLite models.
    """
    
    automl_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automlModel') }})
    gcs_tflite_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsTfliteUri') }})
    

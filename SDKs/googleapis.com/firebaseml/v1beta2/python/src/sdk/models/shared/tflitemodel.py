from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TfLiteModel:
    automl_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automlModel' }})
    gcs_tflite_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsTfliteUri' }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeBytes' }})
    

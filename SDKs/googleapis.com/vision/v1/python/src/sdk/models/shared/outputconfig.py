from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gcsdestination


@dataclass_json
@dataclass
class OutputConfig:
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchSize' }})
    gcs_destination: Optional[gcsdestination.GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDestination' }})
    

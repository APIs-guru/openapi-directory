from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deidentifyconfig


@dataclass_json
@dataclass
class DeidentifyDatasetRequest:
    config: Optional[deidentifyconfig.DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    destination_dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDataset' }})
    gcs_config_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsConfigUri' }})
    

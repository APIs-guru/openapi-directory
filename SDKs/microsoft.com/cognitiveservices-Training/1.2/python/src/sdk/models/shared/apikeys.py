from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keypair
from . import keypair


@dataclass_json
@dataclass
class APIKeys:
    prediction_keys: Optional[keypair.KeyPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictionKeys' }})
    training_keys: Optional[keypair.KeyPair] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingKeys' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KafkaConfig:
    r"""KafkaConfig
    The configuration for kafka access
    """
    
    servers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    key_pass: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPass') }})
    key_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyStore') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    trustore: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustore') }})
    

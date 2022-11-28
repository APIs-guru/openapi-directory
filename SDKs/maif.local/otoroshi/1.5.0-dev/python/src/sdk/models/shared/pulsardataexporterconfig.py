from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PulsarDataExporterConfig:
    r"""PulsarDataExporterConfig
    The configuration for kafka access
    """
    
    namespace: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    tenant: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    topic: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    uri: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

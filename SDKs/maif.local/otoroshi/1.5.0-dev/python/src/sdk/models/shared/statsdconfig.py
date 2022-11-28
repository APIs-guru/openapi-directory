from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatsdConfig:
    r"""StatsdConfig
    The configuration for statsd metrics push
    """
    
    datadog: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datadog') }})
    host: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    port: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LoggingDestination:
    r"""LoggingDestination
    Configuration of a specific logging destination (the producer project or the consumer project).
    """
    
    logs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logs') }})
    monitored_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoredResource') }})
    

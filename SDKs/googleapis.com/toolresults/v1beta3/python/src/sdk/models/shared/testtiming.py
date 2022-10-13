from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import duration


@dataclass_json
@dataclass
class TestTiming:
    test_process_duration: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testProcessDuration' }})
    

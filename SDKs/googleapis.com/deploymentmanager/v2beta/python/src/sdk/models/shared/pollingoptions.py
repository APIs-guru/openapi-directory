from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import diagnostic


@dataclass_json
@dataclass
class PollingOptions:
    diagnostics: Optional[List[diagnostic.Diagnostic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnostics' }})
    fail_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failCondition' }})
    finish_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishCondition' }})
    polling_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pollingLink' }})
    target_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetLink' }})
    

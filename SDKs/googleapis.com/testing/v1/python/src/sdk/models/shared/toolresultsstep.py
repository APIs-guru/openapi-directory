from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ToolResultsStep:
    r"""ToolResultsStep
    Represents a tool results step resource. This has the results of a TestExecution.
    """
    
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyId') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    

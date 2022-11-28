from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MultipleChoiceQuestion:
    r"""MultipleChoiceQuestion
    Additional details for multiple-choice questions.
    """
    
    choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choices') }})
    

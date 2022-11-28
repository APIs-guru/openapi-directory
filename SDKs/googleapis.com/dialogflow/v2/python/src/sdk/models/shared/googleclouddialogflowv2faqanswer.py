from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2FaqAnswer:
    r"""GoogleCloudDialogflowV2FaqAnswer
    Represents answer from \"frequently asked questions\".
    """
    
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    answer_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerRecord') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttributeScores:
    r"""AttributeScores
    This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score..
    """
    
    span_scores: Optional[List[SpanScore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spanScores') }})
    summary_score: Optional[Score] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaryScore') }})
    

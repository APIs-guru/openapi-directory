from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import spanscore
from . import score


@dataclass_json
@dataclass
class AttributeScores:
    span_scores: Optional[List[spanscore.SpanScore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spanScores' }})
    summary_score: Optional[score.Score] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaryScore' }})
    

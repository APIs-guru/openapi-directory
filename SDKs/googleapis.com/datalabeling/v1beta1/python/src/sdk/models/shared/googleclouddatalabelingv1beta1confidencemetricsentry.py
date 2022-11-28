from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry:
    confidence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceThreshold') }})
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('f1Score') }})
    f1_score_at1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('f1ScoreAt1') }})
    f1_score_at5: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('f1ScoreAt5') }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    precision_at1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precisionAt1') }})
    precision_at5: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precisionAt5') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recall') }})
    recall_at1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recallAt1') }})
    recall_at5: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recallAt5') }})
    

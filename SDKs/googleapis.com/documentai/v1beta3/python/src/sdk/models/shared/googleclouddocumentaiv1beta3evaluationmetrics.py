from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3EvaluationMetrics:
    r"""GoogleCloudDocumentaiV1beta3EvaluationMetrics
    Evaluation metrics, either in aggregate or about a specific entity.
    """
    
    f1_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('f1Score') }})
    false_negatives_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('falseNegativesCount') }})
    false_positives_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('falsePositivesCount') }})
    ground_truth_document_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groundTruthDocumentCount') }})
    ground_truth_occurrences_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groundTruthOccurrencesCount') }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    predicted_document_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictedDocumentCount') }})
    predicted_occurrences_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictedOccurrencesCount') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recall') }})
    total_documents_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDocumentsCount') }})
    true_positives_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truePositivesCount') }})
    

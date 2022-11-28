from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJobConfig:
    r"""GoogleCloudDatalabelingV1beta1EvaluationJobConfig
    Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
    """
    
    bigquery_import_keys: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryImportKeys') }})
    bounding_poly_config: Optional[GoogleCloudDatalabelingV1beta1BoundingPolyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPolyConfig') }})
    evaluation_config: Optional[GoogleCloudDatalabelingV1beta1EvaluationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationConfig') }})
    evaluation_job_alert_config: Optional[GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationJobAlertConfig') }})
    example_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleCount') }})
    example_sample_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exampleSamplePercentage') }})
    human_annotation_config: Optional[GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAnnotationConfig') }})
    image_classification_config: Optional[GoogleCloudDatalabelingV1beta1ImageClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageClassificationConfig') }})
    input_config: Optional[GoogleCloudDatalabelingV1beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    text_classification_config: Optional[GoogleCloudDatalabelingV1beta1TextClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textClassificationConfig') }})
    

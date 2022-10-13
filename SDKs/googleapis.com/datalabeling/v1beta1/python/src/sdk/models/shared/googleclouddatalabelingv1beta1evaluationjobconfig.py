from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1boundingpolyconfig
from . import googleclouddatalabelingv1beta1evaluationconfig
from . import googleclouddatalabelingv1beta1evaluationjobalertconfig
from . import googleclouddatalabelingv1beta1humanannotationconfig
from . import googleclouddatalabelingv1beta1imageclassificationconfig
from . import googleclouddatalabelingv1beta1inputconfig
from . import googleclouddatalabelingv1beta1textclassificationconfig


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJobConfig:
    bigquery_import_keys: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryImportKeys' }})
    bounding_poly_config: Optional[googleclouddatalabelingv1beta1boundingpolyconfig.GoogleCloudDatalabelingV1beta1BoundingPolyConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPolyConfig' }})
    evaluation_config: Optional[googleclouddatalabelingv1beta1evaluationconfig.GoogleCloudDatalabelingV1beta1EvaluationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationConfig' }})
    evaluation_job_alert_config: Optional[googleclouddatalabelingv1beta1evaluationjobalertconfig.GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationJobAlertConfig' }})
    example_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exampleCount' }})
    example_sample_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exampleSamplePercentage' }})
    human_annotation_config: Optional[googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAnnotationConfig' }})
    image_classification_config: Optional[googleclouddatalabelingv1beta1imageclassificationconfig.GoogleCloudDatalabelingV1beta1ImageClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageClassificationConfig' }})
    input_config: Optional[googleclouddatalabelingv1beta1inputconfig.GoogleCloudDatalabelingV1beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    text_classification_config: Optional[googleclouddatalabelingv1beta1textclassificationconfig.GoogleCloudDatalabelingV1beta1TextClassificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textClassificationConfig' }})
    

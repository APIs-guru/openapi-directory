from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3Evaluation:
    r"""GoogleCloudDocumentaiV1beta3Evaluation
    An evaluation of a ProcessorVersion's performance.
    """
    
    all_entities_metrics: Optional[GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allEntitiesMetrics') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    document_counters: Optional[GoogleCloudDocumentaiV1beta3EvaluationCounters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentCounters') }})
    entity_metrics: Optional[dict[str, GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityMetrics') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    kms_key_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyVersionName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

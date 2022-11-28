from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EvaluateAnnotationStoreRequest:
    r"""EvaluateAnnotationStoreRequest
    Request to evaluate an Annotation store against a ground truth [Annotation store].
    """
    
    bigquery_destination: Optional[GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryDestination') }})
    eval_info_type_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evalInfoTypeMapping') }})
    golden_info_type_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goldenInfoTypeMapping') }})
    golden_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goldenStore') }})
    info_type_config: Optional[InfoTypeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypeConfig') }})
    

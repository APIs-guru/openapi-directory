from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1AnnotationMetadata:
    r"""GoogleCloudDatalabelingV1beta1AnnotationMetadata
    Additional information associated with the annotation.
    """
    
    operator_metadata: Optional[GoogleCloudDatalabelingV1beta1OperatorMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorMetadata') }})
    

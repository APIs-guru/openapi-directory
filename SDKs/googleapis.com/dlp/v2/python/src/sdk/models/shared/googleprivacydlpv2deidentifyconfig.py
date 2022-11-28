from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeidentifyConfig:
    r"""GooglePrivacyDlpV2DeidentifyConfig
    The configuration that controls how the data will change.
    """
    
    image_transformations: Optional[GooglePrivacyDlpV2ImageTransformations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTransformations') }})
    info_type_transformations: Optional[GooglePrivacyDlpV2InfoTypeTransformations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypeTransformations') }})
    record_transformations: Optional[GooglePrivacyDlpV2RecordTransformations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordTransformations') }})
    transformation_error_handling: Optional[GooglePrivacyDlpV2TransformationErrorHandling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformationErrorHandling') }})
    

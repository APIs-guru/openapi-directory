from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2FieldTransformation:
    r"""GooglePrivacyDlpV2FieldTransformation
    The transformation to apply to the field.
    """
    
    condition: Optional[GooglePrivacyDlpV2RecordCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    fields: Optional[List[GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    info_type_transformations: Optional[GooglePrivacyDlpV2InfoTypeTransformations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypeTransformations') }})
    primitive_transformation: Optional[GooglePrivacyDlpV2PrimitiveTransformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primitiveTransformation') }})
    

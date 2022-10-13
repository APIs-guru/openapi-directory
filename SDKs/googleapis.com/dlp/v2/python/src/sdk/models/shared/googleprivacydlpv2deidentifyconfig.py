from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2imagetransformations
from . import googleprivacydlpv2infotypetransformations
from . import googleprivacydlpv2recordtransformations
from . import googleprivacydlpv2transformationerrorhandling


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeidentifyConfig:
    image_transformations: Optional[googleprivacydlpv2imagetransformations.GooglePrivacyDlpV2ImageTransformations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTransformations' }})
    info_type_transformations: Optional[googleprivacydlpv2infotypetransformations.GooglePrivacyDlpV2InfoTypeTransformations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypeTransformations' }})
    record_transformations: Optional[googleprivacydlpv2recordtransformations.GooglePrivacyDlpV2RecordTransformations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordTransformations' }})
    transformation_error_handling: Optional[googleprivacydlpv2transformationerrorhandling.GooglePrivacyDlpV2TransformationErrorHandling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformationErrorHandling' }})
    

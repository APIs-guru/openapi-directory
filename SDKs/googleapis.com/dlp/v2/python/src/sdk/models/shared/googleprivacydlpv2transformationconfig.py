from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TransformationConfig:
    deidentify_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deidentifyTemplate' }})
    image_redact_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRedactTemplate' }})
    structured_deidentify_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredDeidentifyTemplate' }})
    

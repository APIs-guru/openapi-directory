from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TransformationConfig:
    r"""GooglePrivacyDlpV2TransformationConfig
    User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config.
    """
    
    deidentify_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deidentifyTemplate') }})
    image_redact_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRedactTemplate') }})
    structured_deidentify_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredDeidentifyTemplate') }})
    

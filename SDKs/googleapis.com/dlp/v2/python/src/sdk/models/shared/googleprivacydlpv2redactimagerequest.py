from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RedactImageRequest:
    r"""GooglePrivacyDlpV2RedactImageRequest
    Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
    """
    
    byte_item: Optional[GooglePrivacyDlpV2ByteContentItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byteItem') }})
    image_redaction_configs: Optional[List[GooglePrivacyDlpV2ImageRedactionConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRedactionConfigs') }})
    include_findings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeFindings') }})
    inspect_config: Optional[GooglePrivacyDlpV2InspectConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectConfig') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    

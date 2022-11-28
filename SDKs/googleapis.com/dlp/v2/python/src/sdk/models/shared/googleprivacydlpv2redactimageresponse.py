from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RedactImageResponse:
    r"""GooglePrivacyDlpV2RedactImageResponse
    Results of redacting an image.
    """
    
    extracted_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractedText') }})
    inspect_result: Optional[GooglePrivacyDlpV2InspectResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectResult') }})
    redacted_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactedImage') }})
    

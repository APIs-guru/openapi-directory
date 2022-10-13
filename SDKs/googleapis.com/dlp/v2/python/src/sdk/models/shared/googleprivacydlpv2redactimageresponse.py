from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2inspectresult


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RedactImageResponse:
    extracted_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extractedText' }})
    inspect_result: Optional[googleprivacydlpv2inspectresult.GooglePrivacyDlpV2InspectResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectResult' }})
    redacted_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactedImage' }})
    

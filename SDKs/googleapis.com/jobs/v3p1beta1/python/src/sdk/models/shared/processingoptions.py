from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProcessingOptionsHTMLSanitizationEnum(str, Enum):
    HTML_SANITIZATION_UNSPECIFIED = "HTML_SANITIZATION_UNSPECIFIED"
    HTML_SANITIZATION_DISABLED = "HTML_SANITIZATION_DISABLED"
    SIMPLE_FORMATTING_ONLY = "SIMPLE_FORMATTING_ONLY"


@dataclass_json
@dataclass
class ProcessingOptions:
    disable_street_address_resolution: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableStreetAddressResolution' }})
    html_sanitization: Optional[ProcessingOptionsHTMLSanitizationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlSanitization' }})
    

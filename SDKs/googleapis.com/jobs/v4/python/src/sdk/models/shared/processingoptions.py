from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProcessingOptionsHTMLSanitizationEnum(str, Enum):
    HTML_SANITIZATION_UNSPECIFIED = "HTML_SANITIZATION_UNSPECIFIED"
    HTML_SANITIZATION_DISABLED = "HTML_SANITIZATION_DISABLED"
    SIMPLE_FORMATTING_ONLY = "SIMPLE_FORMATTING_ONLY"


@dataclass_json
@dataclass
class ProcessingOptions:
    r"""ProcessingOptions
    Options for job processing.
    """
    
    disable_street_address_resolution: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableStreetAddressResolution') }})
    html_sanitization: Optional[ProcessingOptionsHTMLSanitizationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlSanitization') }})
    

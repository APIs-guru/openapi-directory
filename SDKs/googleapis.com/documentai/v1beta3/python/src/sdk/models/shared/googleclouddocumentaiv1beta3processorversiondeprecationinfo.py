from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo:
    r"""GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo
    Information about the upcoming deprecation of this processor version.
    """
    
    deprecation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecationTime') }})
    replacement_processor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacementProcessorVersion') }})
    

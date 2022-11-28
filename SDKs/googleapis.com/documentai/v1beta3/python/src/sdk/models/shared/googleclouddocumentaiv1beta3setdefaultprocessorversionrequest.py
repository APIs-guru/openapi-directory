from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest:
    r"""GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest
    Request message for the set default processor version method.
    """
    
    default_processor_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultProcessorVersion') }})
    

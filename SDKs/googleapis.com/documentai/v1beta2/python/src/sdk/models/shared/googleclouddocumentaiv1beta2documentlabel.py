from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2DocumentLabel:
    r"""GoogleCloudDocumentaiV1beta2DocumentLabel
    Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.
    """
    
    automl_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automlModel') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

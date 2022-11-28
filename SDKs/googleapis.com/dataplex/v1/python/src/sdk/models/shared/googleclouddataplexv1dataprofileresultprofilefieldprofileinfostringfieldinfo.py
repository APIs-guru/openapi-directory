from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo:
    r"""GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo
    StringFieldInfo defines output info for any string type field.
    """
    
    average_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageLength') }})
    max_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLength') }})
    min_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLength') }})
    

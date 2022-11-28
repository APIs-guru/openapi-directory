from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1ConsentGcsDestination:
    r"""GoogleCloudHealthcareV1beta1ConsentGcsDestination
    The Cloud Storage location for export.
    """
    
    uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uriPrefix') }})
    

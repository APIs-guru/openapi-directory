from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeidentifyFhirStoreRequest:
    r"""DeidentifyFhirStoreRequest
    Creates a new FHIR store with sensitive information de-identified.
    """
    
    config: Optional[DeidentifyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    destination_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationStore') }})
    gcs_config_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsConfigUri') }})
    resource_filter: Optional[FhirFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceFilter') }})
    skip_modified_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipModifiedResources') }})
    

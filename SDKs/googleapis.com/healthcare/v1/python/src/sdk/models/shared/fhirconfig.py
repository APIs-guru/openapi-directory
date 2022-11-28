from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FhirConfig:
    r"""FhirConfig
    Specifies how to handle de-identification of a FHIR store.
    """
    
    default_keep_extensions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultKeepExtensions') }})
    field_metadata_list: Optional[List[FieldMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldMetadataList') }})
    

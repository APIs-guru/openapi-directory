from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1GcsFilesetSpec:
    r"""GoogleCloudDatacatalogV1beta1GcsFilesetSpec
    Describes a Cloud Storage fileset entry.
    """
    
    file_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePatterns') }})
    sample_gcs_file_specs: Optional[List[GoogleCloudDatacatalogV1beta1GcsFileSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleGcsFileSpecs') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput:
    r"""GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput
    Describes a Cloud Storage fileset entry.
    """
    
    file_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePatterns') }})
    

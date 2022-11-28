from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FhirFieldConfigProfileTypeEnum(str, Enum):
    PROFILE_TYPE_UNSPECIFIED = "PROFILE_TYPE_UNSPECIFIED"
    KEEP_ALL = "KEEP_ALL"
    BASIC = "BASIC"
    CLEAN_ALL = "CLEAN_ALL"


@dataclass_json
@dataclass
class FhirFieldConfig:
    r"""FhirFieldConfig
    Specifies how to handle the de-identification of a FHIR store.
    """
    
    field_metadata_list: Optional[List[GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldMetadataList') }})
    options: Optional[GoogleCloudHealthcareV1beta1DeidentifyOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    profile_type: Optional[FhirFieldConfigProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileType') }})
    

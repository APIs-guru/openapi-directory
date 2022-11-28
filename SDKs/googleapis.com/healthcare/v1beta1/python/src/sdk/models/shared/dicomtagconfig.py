from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DicomTagConfigProfileTypeEnum(str, Enum):
    PROFILE_TYPE_UNSPECIFIED = "PROFILE_TYPE_UNSPECIFIED"
    MINIMAL_KEEP_LIST_PROFILE = "MINIMAL_KEEP_LIST_PROFILE"
    ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE"
    KEEP_ALL_PROFILE = "KEEP_ALL_PROFILE"
    DEIDENTIFY_TAG_CONTENTS = "DEIDENTIFY_TAG_CONTENTS"


@dataclass_json
@dataclass
class DicomTagConfig:
    r"""DicomTagConfig
    Specifies the parameters needed for the de-identification of DICOM stores.
    """
    
    actions: Optional[List[Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    options: Optional[Options] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    profile_type: Optional[DicomTagConfigProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileType') }})
    

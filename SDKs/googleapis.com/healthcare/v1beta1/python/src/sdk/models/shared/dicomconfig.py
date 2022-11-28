from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DicomConfigFilterProfileEnum(str, Enum):
    TAG_FILTER_PROFILE_UNSPECIFIED = "TAG_FILTER_PROFILE_UNSPECIFIED"
    MINIMAL_KEEP_LIST_PROFILE = "MINIMAL_KEEP_LIST_PROFILE"
    ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE"
    KEEP_ALL_PROFILE = "KEEP_ALL_PROFILE"
    DEIDENTIFY_TAG_CONTENTS = "DEIDENTIFY_TAG_CONTENTS"


@dataclass_json
@dataclass
class DicomConfig:
    r"""DicomConfig
    Specifies the parameters needed for de-identification of DICOM stores.
    """
    
    filter_profile: Optional[DicomConfigFilterProfileEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterProfile') }})
    keep_list: Optional[TagFilterList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepList') }})
    remove_list: Optional[TagFilterList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeList') }})
    skip_id_redaction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipIdRedaction') }})
    

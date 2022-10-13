from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tagfilterlist
from . import tagfilterlist

class DicomConfigFilterProfileEnum(str, Enum):
    TAG_FILTER_PROFILE_UNSPECIFIED = "TAG_FILTER_PROFILE_UNSPECIFIED"
    MINIMAL_KEEP_LIST_PROFILE = "MINIMAL_KEEP_LIST_PROFILE"
    ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE = "ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE"
    KEEP_ALL_PROFILE = "KEEP_ALL_PROFILE"
    DEIDENTIFY_TAG_CONTENTS = "DEIDENTIFY_TAG_CONTENTS"


@dataclass_json
@dataclass
class DicomConfig:
    filter_profile: Optional[DicomConfigFilterProfileEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterProfile' }})
    keep_list: Optional[tagfilterlist.TagFilterList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepList' }})
    remove_list: Optional[tagfilterlist.TagFilterList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeList' }})
    skip_id_redaction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipIdRedaction' }})
    

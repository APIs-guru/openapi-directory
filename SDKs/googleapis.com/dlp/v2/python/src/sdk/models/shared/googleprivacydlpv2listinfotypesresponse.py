from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ListInfoTypesResponse:
    r"""GooglePrivacyDlpV2ListInfoTypesResponse
    Response to the ListInfoTypes request.
    """
    
    info_types: Optional[List[GooglePrivacyDlpV2InfoTypeDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    

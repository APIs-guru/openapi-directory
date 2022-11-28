from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KAnonymityConfig:
    r"""GooglePrivacyDlpV2KAnonymityConfig
    k-anonymity metric, used for analysis of reidentification risk.
    """
    
    entity_id: Optional[GooglePrivacyDlpV2EntityID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityId') }})
    quasi_ids: Optional[List[GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIds') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Key:
    r"""GooglePrivacyDlpV2Key
    A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
    """
    
    partition_id: Optional[GooglePrivacyDlpV2PartitionID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionId') }})
    path: Optional[List[GooglePrivacyDlpV2PathElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DatastoreKey:
    r"""GooglePrivacyDlpV2DatastoreKey
    Record key for a finding in Cloud Datastore.
    """
    
    entity_key: Optional[GooglePrivacyDlpV2Key] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityKey') }})
    

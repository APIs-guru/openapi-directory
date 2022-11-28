from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DatastoreOptions:
    r"""GooglePrivacyDlpV2DatastoreOptions
    Options defining a data set within Google Cloud Datastore.
    """
    
    kind: Optional[GooglePrivacyDlpV2KindExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    partition_id: Optional[GooglePrivacyDlpV2PartitionID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionId') }})
    

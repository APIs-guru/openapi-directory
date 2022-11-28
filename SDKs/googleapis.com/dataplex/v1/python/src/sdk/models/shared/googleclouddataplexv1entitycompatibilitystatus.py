from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EntityCompatibilityStatus:
    r"""GoogleCloudDataplexV1EntityCompatibilityStatus
    Provides compatibility information for various metadata stores.
    """
    
    bigquery: Optional[GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigquery') }})
    hive_metastore: Optional[GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveMetastore') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordKey:
    r"""GooglePrivacyDlpV2RecordKey
    Message for a unique key indicating a record that contains a finding.
    """
    
    big_query_key: Optional[GooglePrivacyDlpV2BigQueryKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryKey') }})
    datastore_key: Optional[GooglePrivacyDlpV2DatastoreKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreKey') }})
    id_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idValues') }})
    

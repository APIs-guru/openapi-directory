from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StorageConfig:
    r"""GooglePrivacyDlpV2StorageConfig
    Shared message indicating Cloud storage type.
    """
    
    big_query_options: Optional[GooglePrivacyDlpV2BigQueryOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryOptions') }})
    cloud_storage_options: Optional[GooglePrivacyDlpV2CloudStorageOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStorageOptions') }})
    datastore_options: Optional[GooglePrivacyDlpV2DatastoreOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastoreOptions') }})
    hybrid_options: Optional[GooglePrivacyDlpV2HybridOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hybridOptions') }})
    timespan_config: Optional[GooglePrivacyDlpV2TimespanConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timespanConfig') }})
    

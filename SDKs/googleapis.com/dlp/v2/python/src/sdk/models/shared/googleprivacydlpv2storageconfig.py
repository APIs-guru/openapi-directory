from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2bigqueryoptions
from . import googleprivacydlpv2cloudstorageoptions
from . import googleprivacydlpv2datastoreoptions
from . import googleprivacydlpv2hybridoptions
from . import googleprivacydlpv2timespanconfig


@dataclass_json
@dataclass
class GooglePrivacyDlpV2StorageConfig:
    big_query_options: Optional[googleprivacydlpv2bigqueryoptions.GooglePrivacyDlpV2BigQueryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQueryOptions' }})
    cloud_storage_options: Optional[googleprivacydlpv2cloudstorageoptions.GooglePrivacyDlpV2CloudStorageOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudStorageOptions' }})
    datastore_options: Optional[googleprivacydlpv2datastoreoptions.GooglePrivacyDlpV2DatastoreOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreOptions' }})
    hybrid_options: Optional[googleprivacydlpv2hybridoptions.GooglePrivacyDlpV2HybridOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hybridOptions' }})
    timespan_config: Optional[googleprivacydlpv2timespanconfig.GooglePrivacyDlpV2TimespanConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timespanConfig' }})
    

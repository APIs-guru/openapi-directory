from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2bigquerykey
from . import googleprivacydlpv2datastorekey


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordKey:
    big_query_key: Optional[googleprivacydlpv2bigquerykey.GooglePrivacyDlpV2BigQueryKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQueryKey' }})
    datastore_key: Optional[googleprivacydlpv2datastorekey.GooglePrivacyDlpV2DatastoreKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreKey' }})
    id_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idValues' }})
    

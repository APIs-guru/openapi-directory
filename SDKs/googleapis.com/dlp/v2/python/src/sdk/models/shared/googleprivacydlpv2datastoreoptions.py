from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2kindexpression
from . import googleprivacydlpv2partitionid


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DatastoreOptions:
    kind: Optional[googleprivacydlpv2kindexpression.GooglePrivacyDlpV2KindExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    partition_id: Optional[googleprivacydlpv2partitionid.GooglePrivacyDlpV2PartitionID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionId' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2partitionid
from . import googleprivacydlpv2pathelement


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Key:
    partition_id: Optional[googleprivacydlpv2partitionid.GooglePrivacyDlpV2PartitionID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionId' }})
    path: Optional[List[googleprivacydlpv2pathelement.GooglePrivacyDlpV2PathElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

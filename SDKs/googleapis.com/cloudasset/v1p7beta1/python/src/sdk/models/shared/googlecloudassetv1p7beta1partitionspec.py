from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum(str, Enum):
    PARTITION_KEY_UNSPECIFIED = "PARTITION_KEY_UNSPECIFIED"
    READ_TIME = "READ_TIME"
    REQUEST_TIME = "REQUEST_TIME"


@dataclass_json
@dataclass
class GoogleCloudAssetV1p7beta1PartitionSpec:
    partition_key: Optional[GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionKey' }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum(str, Enum):
    PARTITION_KEY_UNSPECIFIED = "PARTITION_KEY_UNSPECIFIED"
    REQUEST_TIME = "REQUEST_TIME"


@dataclass_json
@dataclass
class GoogleCloudAssetV1BigQueryDestination:
    r"""GoogleCloudAssetV1BigQueryDestination
    A BigQuery destination.
    """
    
    dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    partition_key: Optional[GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionKey') }})
    table_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tablePrefix') }})
    write_disposition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeDisposition') }})
    

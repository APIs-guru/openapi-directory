from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssetV1p7beta1BigQueryDestination:
    r"""GoogleCloudAssetV1p7beta1BigQueryDestination
    A BigQuery destination for exporting assets to.
    """
    
    dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force') }})
    partition_spec: Optional[GoogleCloudAssetV1p7beta1PartitionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionSpec') }})
    separate_tables_per_asset_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('separateTablesPerAssetType') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    

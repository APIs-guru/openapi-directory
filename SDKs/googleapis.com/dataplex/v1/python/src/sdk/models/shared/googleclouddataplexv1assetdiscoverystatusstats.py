from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1AssetDiscoveryStatusStats:
    r"""GoogleCloudDataplexV1AssetDiscoveryStatusStats
    The aggregated data statistics for the asset reported by discovery.
    """
    
    data_items: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataItems') }})
    data_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSize') }})
    filesets: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesets') }})
    tables: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tables') }})
    

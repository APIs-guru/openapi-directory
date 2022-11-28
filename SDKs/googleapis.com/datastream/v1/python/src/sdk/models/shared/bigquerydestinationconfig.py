from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BigQueryDestinationConfig:
    data_freshness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFreshness') }})
    single_target_dataset: Optional[SingleTargetDataset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleTargetDataset') }})
    source_hierarchy_datasets: Optional[SourceHierarchyDatasets] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceHierarchyDatasets') }})
    

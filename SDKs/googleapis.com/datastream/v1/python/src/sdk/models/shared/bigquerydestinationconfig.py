from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import singletargetdataset
from . import sourcehierarchydatasets


@dataclass_json
@dataclass
class BigQueryDestinationConfig:
    data_freshness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFreshness' }})
    single_target_dataset: Optional[singletargetdataset.SingleTargetDataset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleTargetDataset' }})
    source_hierarchy_datasets: Optional[sourcehierarchydatasets.SourceHierarchyDatasets] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceHierarchyDatasets' }})
    

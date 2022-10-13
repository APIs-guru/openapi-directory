from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasettemplate


@dataclass_json
@dataclass
class SourceHierarchyDatasets:
    dataset_template: Optional[datasettemplate.DatasetTemplate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetTemplate' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceHierarchyDatasets:
    r"""SourceHierarchyDatasets
    Destination datasets are created so that hierarchy of the destination data objects matches the source hierarchy.
    """
    
    dataset_template: Optional[DatasetTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetTemplate') }})
    

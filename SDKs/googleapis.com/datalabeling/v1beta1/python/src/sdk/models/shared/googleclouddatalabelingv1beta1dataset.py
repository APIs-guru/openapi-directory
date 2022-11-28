from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Dataset:
    r"""GoogleCloudDatalabelingV1beta1Dataset
    Dataset is the resource to hold your data. You can request multiple labeling tasks for a dataset while each one will generate an AnnotatedDataset.
    """
    
    blocking_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockingResources') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    data_item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataItemCount') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    input_configs: Optional[List[GoogleCloudDatalabelingV1beta1InputConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfigs') }})
    last_migrate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMigrateTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

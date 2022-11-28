from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1BigQuerySource:
    r"""GoogleCloudRecommendationengineV1beta1BigQuerySource
    BigQuery source import data from.
    """
    
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSchema') }})
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetId') }})
    gcs_staging_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsStagingDir') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableId') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1BigQuerySource:
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSchema' }})
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetId' }})
    gcs_staging_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsStagingDir' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableId' }})
    

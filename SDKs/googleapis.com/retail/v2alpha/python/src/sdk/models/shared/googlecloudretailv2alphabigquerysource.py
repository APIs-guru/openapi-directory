from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypedate


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaBigQuerySource:
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSchema' }})
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetId' }})
    gcs_staging_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsStagingDir' }})
    partition_date: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionDate' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableId' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import migrationjob


@dataclass_json
@dataclass
class ListMigrationJobsResponse:
    migration_jobs: Optional[List[migrationjob.MigrationJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migrationJobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1BigQueryRoutineSpec:
    imported_libraries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importedLibraries' }})
    

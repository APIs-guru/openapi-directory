from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1BigQueryRoutineSpec:
    r"""GoogleCloudDatacatalogV1BigQueryRoutineSpec
    Fields specific for BigQuery routines.
    """
    
    imported_libraries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importedLibraries') }})
    

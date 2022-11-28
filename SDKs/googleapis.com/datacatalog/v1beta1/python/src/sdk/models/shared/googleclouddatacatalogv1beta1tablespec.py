from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1TableSpec:
    r"""GoogleCloudDatacatalogV1beta1TableSpec
    Normal BigQuery table spec.
    """
    
    grouped_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupedEntry') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FacetOptions:
    r"""FacetOptions
    Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.
    """
    
    num_facet_buckets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numFacetBuckets') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorName') }})
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceName') }})
    

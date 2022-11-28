from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema:
    r"""GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema
    Schema in Thrift format.
    """
    
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

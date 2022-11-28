from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema:
    r"""GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema
    Schema in protocol buffer format.
    """
    
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

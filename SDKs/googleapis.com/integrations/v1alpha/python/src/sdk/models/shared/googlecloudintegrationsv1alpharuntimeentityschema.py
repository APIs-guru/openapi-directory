from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaRuntimeEntitySchema:
    r"""GoogleCloudIntegrationsV1alphaRuntimeEntitySchema
    Metadata of an entity, including a schema for its properties.
    """
    
    array_field_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayFieldSchema') }})
    entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    field_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldSchema') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentSchema:
    r"""GoogleCloudDocumentaiV1DocumentSchema
    The schema defines the output of the processed document by a processor.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_types: Optional[List[GoogleCloudDocumentaiV1DocumentSchemaEntityType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityTypes') }})
    metadata: Optional[GoogleCloudDocumentaiV1DocumentSchemaMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    

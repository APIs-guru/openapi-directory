from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest:
    r"""GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest
    The request message for EntityTypes.BatchDeleteEntityTypes.
    """
    
    entity_type_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityTypeNames') }})
    

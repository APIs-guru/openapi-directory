from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest:
    r"""GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest
    The request message for EntityTypes.BatchDeleteEntities.
    """
    
    entity_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityValues') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    

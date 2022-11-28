from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2MessageAnnotation:
    r"""GoogleCloudDialogflowV2MessageAnnotation
    Represents the result of annotation for the message.
    """
    
    contain_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containEntities') }})
    parts: Optional[List[GoogleCloudDialogflowV2AnnotatedMessagePart]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parts') }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import option

class ChoiceQuestionTypeEnum(str, Enum):
    CHOICE_TYPE_UNSPECIFIED = "CHOICE_TYPE_UNSPECIFIED"
    RADIO = "RADIO"
    CHECKBOX = "CHECKBOX"
    DROP_DOWN = "DROP_DOWN"


@dataclass_json
@dataclass
class ChoiceQuestion:
    options: Optional[List[option.Option]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    shuffle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shuffle' }})
    type: Optional[ChoiceQuestionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

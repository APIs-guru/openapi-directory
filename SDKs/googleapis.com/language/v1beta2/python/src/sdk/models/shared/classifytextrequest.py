from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ClassifyTextRequest:
    r"""ClassifyTextRequest
    The document classification request message.
    """
    
    classification_model_options: Optional[ClassificationModelOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationModelOptions') }})
    document: Optional[Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    

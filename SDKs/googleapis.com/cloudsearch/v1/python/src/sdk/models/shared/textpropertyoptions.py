from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextPropertyOptions:
    r"""TextPropertyOptions
    The options for text properties.
    """
    
    operator_options: Optional[TextOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorOptions') }})
    retrieval_importance: Optional[RetrievalImportance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retrievalImportance') }})
    

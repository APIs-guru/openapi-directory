from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestedDocumentStyle:
    r"""SuggestedDocumentStyle
    A suggested change to the DocumentStyle.
    """
    
    document_style: Optional[DocumentStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentStyle') }})
    document_style_suggestion_state: Optional[DocumentStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentStyleSuggestionState') }})
    

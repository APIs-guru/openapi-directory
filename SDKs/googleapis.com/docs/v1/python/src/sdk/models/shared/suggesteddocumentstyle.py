from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import documentstyle
from . import documentstylesuggestionstate


@dataclass_json
@dataclass
class SuggestedDocumentStyle:
    document_style: Optional[documentstyle.DocumentStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentStyle' }})
    document_style_suggestion_state: Optional[documentstylesuggestionstate.DocumentStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentStyleSuggestionState' }})
    

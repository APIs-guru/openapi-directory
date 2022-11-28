from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LanguageSettings:
    r"""LanguageSettings
    Language settings for an account. These settings correspond to the \"Language settings\" feature in the web interface.
    """
    
    display_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayLanguage') }})
    
